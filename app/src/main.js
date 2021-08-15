var i,j,
    
    addNewChart = document.getElementById("addNewChart"),
    addLabels = document.getElementById("addLabels"),
    generate = document.getElementById("generate"),
    
    options =  document.getElementById("options"),
    labls = document.querySelector(".labls"),
    charts = document.querySelector(".charts"),
    dt = document.querySelector(".dt"),
    
    labelsArr = [],
    datasetArr = [],
    data = [],
    
    obj = {}, 
    
    ctx = document.querySelector("canvas").getContext('2d');


addNewChart.onclick = function(){
    options.appendChild(charts.cloneNode(true));
};
//---
addLabels.onclick = function(){
    document.querySelector(".labels").appendChild(labls.cloneNode());
    for(i=0;i<document.querySelectorAll(".charts").length;i++){
        document.querySelectorAll(".charts")[i].appendChild(dt.cloneNode());
    }
};
//---

generate.onclick=function(){
    if(isNaN(document.querySelector(".dt").value)){
        alert("Please verify your Data inputs!");
    }else{
    var labelsAll = document.querySelector(".labels");
    for(i=3;i<labelsAll.children.length;i++){
        labelsArr.push(labelsAll.children[i].value);
    }
    //
    var chartAll = document.querySelectorAll(".charts");
    for (i = 0;i<chartAll.length; i++) {
        obj={
            label:chartAll[i].children[0].value,
            type:chartAll[i].children[1].value,
            backgroundColor:chartAll[i].children[2].value+"50",
            borderColor:chartAll[i].children[2].value,
            };
        for(j=3;j<charts.children.length;j++){
            data.push(chartAll[i].children[j].value); 
        }
        obj["data"] = data ;
        obj["borderWidth"] = 2;
        datasetArr.push(obj);
        data = [];
    }
    //
    var mixedChart = new Chart(ctx, {
        data: {
            datasets: datasetArr,
            labels: labelsArr
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    }
};
//---


