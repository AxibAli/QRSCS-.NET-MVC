debugger;
const ViStudents = document.getElementById("total_vistudents");
const HiStudents = document.getElementById("total_histudents");
const IddStudents = document.getElementById("total_iddstudents");
const Teachers = document.getElementById("total_teachers");
const Users = document.getElementById("total_users");

//First DonutChart
    var donut =
    {
        labels: ["ALL-USERS", "ALL-TEACHERS"],
    datasets: [{
        backgroundColor: [
    "#42188a",
    "#ec3261",
    ],
    borderWidth: 2,
        data: [Users, Teachers]
            }]
        };
    //Second DonutChart
    var donut2 =
    {
        labels: ["HI-STUDENTS", "VI-STUDENTS", "IDD-STUDENTS"],
    datasets: [{
        backgroundColor: [
    "#275efd",
    "#2596be",
    "#063970",
    ],
        borderWidth: 2,
        data: [HiStudents, ViStudents, IddStudents]
        }]
    };
    //Bar Chart
    var bar =
    {
        labels: ["HI-DISABLED", "VI-DISABLED", "ID-DISABLED"],
    datasets: [{
        label: 'Disability Ratio',
    backgroundColor: [
    "#80391e",
    "#4d0000",
    "#004d4d",
    ],
    borderWidth: 2,
    data: [total_histudents,total_vistudents,total_iddstudents]

        }]
    };


window.onload = function () {
    //First DonutChart
    var ctx1 = document.getElementById("Doughnutcanvas").getContext("2d");
    window.myBar = new Chart(ctx1,
        {
            type: 'doughnut',
            data: donut,
            options:
            {
                title:
                {
                    display: true,
                },
                responsive: true,
                maintainAspectRatio: true
            }
        });
    //Second DonutChart
    var ctx2 = document.getElementById("Doughnutcanvas2").getContext("2d");
    window.myBar = new Chart(ctx2,
        {
            type: 'doughnut',
            data: donut2,
            options:
            {
                title:
                {
                    display: true,
                },
                responsive: true,
                maintainAspectRatio: true
            }
        });
    //Bar Chart
    var barchart = document.getElementById("barcanvas").getContext("2d");
    window.myBar = new Chart(barchart,
        {
            type: 'bar',
            data: bar,
            options: {
                title:
                {
                    display: true,
                },
                responsive: true,
                maintainAspectRatio: true
            }
        });
}