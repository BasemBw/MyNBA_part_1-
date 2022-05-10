class Renderer {
    constructor() {
        this.source = $('#template').html();
        this.FrindsTemplate = Handlebars.compile(this.source);
    }
    getDataMethod(data){
            let obj = {
                dataArray:data
            }
            const newHTML = this.FrindsTemplate(obj);
            $('.wrapper').html('')
            $('.wrapper').append(newHTML)
    }
}