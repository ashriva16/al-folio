document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("skillsChart");
  if (!ctx) return;

  const skillLabels = JSON.parse(ctx.getAttribute("data-labels"));
  const skillValues = JSON.parse(ctx.getAttribute("data-values"));

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: skillLabels,
      datasets: [
        {
          label: "Skill Proficiency",
          data: skillValues,
          backgroundColor: "rgba(54, 162, 235, 0.6)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      indexAxis: "y",
      responsive: true,
      scales: {
        x: {
          beginAtZero: true,
          max: 100,
        },
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (context) => context.parsed.x + "%",
          },
        },
      },
    },
  });
});
