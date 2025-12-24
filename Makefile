SHELL := /bin/bash
.ONESHELL:
.PHONY: build commit copy push deploy upstream-merge

MSG_FILE := .commit_message.tmp

# deploy: clean commit build copy push
# 	@rm -f "$(MSG_FILE)"

clean:
	npm run bundle:clean

build:
	npm run build && npm run ci && npm run analyze

# Prompt once (if not set via COMMIT_MSG) and save to a temp file
# commit:
# 	@read -p "Enter commit message : " msg; \
# 	git add -A; \
# 	if git diff --cached --quiet; then \
# 	  echo "nothing to commit — continuing"; \
# 	else \
# 	  git commit -m "$$msg" && git push origin myweb; \
# 	fi

# copy:
# 	rsync -av --delete --exclude ".git" --exclude ".gitignore" _site/ ../page/

# push:
# 	@if [ -z "$$COMMIT_MSG" ] && [ ! -s "$(MSG_FILE)" ]; then \
# 	  read -p "Enter one commit message: " m; \
# 	  printf "%s" "$$m" > "$(MSG_FILE)"; \
# 	fi; \
# 	msg="$${COMMIT_MSG:-$$(cat "$(MSG_FILE)")}"; \
# 	cd ../page && git add -A && git commit -m "$$msg" && git push; \
# 	rm -f "$(MSG_FILE)"

# Rebase myweb on the latest upstream/main (resets local main to upstream)
upstream-merge:
	git fetch upstream
	git checkout main
	git reset --hard upstream/main
	git checkout myweb
	git rebase main || true
	@echo ""
	@echo "Rebase finished (or paused on conflicts)."
	@echo "👉 Inspect with:   git status / git diff"
	@echo "👉 If conflicts:   fix files, git add <file>, git rebase --continue"
	@echo "👉 Abort rebase:   git rebase --abort"
	@echo "👉 Push updated branch: git push origin myweb --force-with-lease"
