describe("the application", function() {
    it("paint tries", function(){
        startApp();
        var score = document.querySelector('.tries');
        var button = document.querySelector('.boton_try');
        var puntos=0;
        var numero= document.querySelector('#box_number').value;
        numero=parseInt(numero);
        
        button.click()
                puntos=puntos+1;
                 puntos=score.innerHTML
                expect(puntos).toEqual(score.innerHTML)
    })
    it("pistas", function(){
        startApp();
        var button = document.querySelector('.boton_try');
        var numero= document.querySelector('#box_number').value;
        numero=parseInt(numero);
            
        button.click();
            alert='Solo se permiten números del 0 al 100.';
            expect(numero).toBeGreaterThan(100)
                   
    }) 
})