function showRegistrationForm() {
    document.getElementById("home-content").classList.add("hidden");
    document.getElementById("update-stage").classList.add("hidden");
    document.getElementById("registration-form").style.display = "block";
}
function hideRegistrationForm() {
    document.getElementById("registration-form").classList.add("hidden");
    ddocument.getElementById("home-content").style.display = "block";
}
function hideupdatestage() {
    document.getElementById("update-stage").classList.add("hidden");
    ddocument.getElementById("home-content").style.display = "block";
}
function showupdatestage() {
    document.getElementById("home-content").classList.add("hidden");
    document.getElementById("registration-form").classList.add("hidden");
    document.getElementById("update-stage").style.display = "block";
}
function showHomeContent() {
    document.getElementById("registration-form").classList.add("hidden");
    document.getElementById("update-stage").classList.add("hidden");
    document.getElementById("home-content").style.display = "block";
}
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.getElementById("main-content");

    sidebar.classList.toggle("closed");
    mainContent.classList.toggle("shifted");
}
function saveData() {
    let username = document.getElementById("username").value;
    let updateStage = document.getElementById("updateStage").value;
    let followUpDate = document.getElementById("followUpDate").value;
    let photo = document.getElementById("photoUpload").files[0];
    if (!username || !updateStage || !followUpDate) {
        alert("Please fill all fields before saving.");
        return;
    }
    alert("Status updated successfully!");
}
function showDashboard() {
    document.getElementById("main-content").innerHTML = `
        <h1>Dashboard</h1>
        <div class="dashboard-container">
        <div class="chart-container">
           
            <canvas id="leadsChart"></canvas>
        </div>
        <div class="chart-container">
            
            <canvas id="Chart"></canvas>
        </div>
        <div class="chart-container">
            <canvas id="salesChart"></canvas>
        </div>
        <div class="chart-container">
            <canvas id="monthlyChart"></canvas>
        </div>
         </div>
    `;

    renderCharts();
}

function renderCharts() {
    // Leads Pie Chart
    new Chart(document.getElementById("leadsChart"), {
        type: 'pie',
        data: {
            labels: ["Open Leads", "Interested Cold", "Interested Hot"],
            datasets: [{
                data: [10, 15, 5], // Dummy data, replace with actual
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
            }]
        },options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Graphic Presentation', // Headline above chart
                    font: {
                        size: 20,
                        weight: 'bold'
                    },
                    padding: {
                        bottom: 20 // Space between title and chart
                    }
                },
                legend: {
                    position: 'right', // Moves labels to the right side
                    align: 'center',
                    labels: {
                        boxWidth: 20,
                        padding: 20
                    }
                }
            }
        }
    });
        // Leads Pie Chart
        new Chart(document.getElementById("Chart"), {
            type: 'pie',
            data: {
                labels: ["Enquiry done","Design Submitted","Quotation Submitted",
                    "Online Appln Done","Presanction Received","Installation Done","Geotagging Done",
                    "Bill Uploaded","Order from Dlr/Converted to Sales","Order Postponed","Order Cancelled",
                    "Lost to Other  Co."],
                datasets: [{
                    data: [10, 15, 5,54,35,4,5,6,8,9,16,32], // Dummy data, replace with actual
                    backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56","#FF6384","#FFCE56",
                        "#007BFF","#9B59B6","#1ABC9C","#34495E","#FFFACD"]
                }]
            },options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Graphical Representation of Total Leads', // Headline above chart
                        font: {
                            size: 20,
                            weight: 'bold'
                        },
                        padding: {
                            bottom: 20 // Space between title and chart
                        }
                    },
                    legend: {
                        position: 'right', // Moves labels to the right side
                        align: 'center',
                        labels: {
                            boxWidth: 15,
                            padding: 20
                        }
                    }
                }
            }
        });

    // Sales Achievement Bar Chart
    new Chart(document.getElementById("salesChart"), {
        type: 'bar',
        data: {
            labels: ["Q1", "Q2", "Q3", "Q4"],
            datasets: [{
                label: "Achieved",
                data: [80, 90, 75, 95], // Dummy data
                backgroundColor: "#4CAF50"
            }, {
                label: "Target",
                data: [100, 80, 90, 70], // Target values
                backgroundColor: "#FFC107"
            }]
        },options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Gantt Chart - Sales Achievement', // Headline above chart
                    font: {
                        size: 18,
                        weight: 'bold'
                    },
                    padding: {
                        bottom: 20 // Space between title and chart
                    }
                },
                legend: {
                    position: 'right', // Moves labels to the right side
                    align: 'center',
                    labels: {
                        boxWidth: 15,
                        padding: 20
                    }
                }
            }
        }
    });

    // Monthly Achievement Line Chart
    new Chart(document.getElementById("monthlyChart"), {
        type: 'line',
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May","June","july","Aug","Sep","Oct","Nov","Dec"],
            datasets: [{
                label: "Achievement",
                data: [10, 20, 30, 25, 40,50,70,50,80,30,90], // Dummy data
                borderColor: "#007BFF",
                fill: false
            }]
        },options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Bar Chart - Monthly Achievement', // Headline above chart
                    font: {
                        size: 18,
                        weight: 'bold'
                    },
                    padding: {
                        bottom: 20 // Space between title and chart
                    }
                },
                legend: {
                    position: 'right', // Moves labels to the right side
                    align: 'center',
                    labels: {
                        boxWidth: 15,
                        padding: 20
                    }
                }
            }
        }
    });
    
}

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".card button");
    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            alert(`More info about: ${e.target.parentElement.textContent.trim()}`);
        });
    });
});
