const render = new Renderer()


const  getDataFun = function (){
    console.log($("input").val())
    let nameTeam = $("input").val()
    console.log(nameTeam)
    $.get(`http://localhost:5000/teams/${nameTeam}`, function (data) {
        console.log("mydata:",data)
        render.getDataMethod(data)
    })
}