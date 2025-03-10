$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false
    });
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 12345-6789'
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    })

    $('#cep').mask('00000-000', {
        placeholder: '012345-678'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu Nome',
            email: 'Por favor, insira seu Email',
            telefone: 'Por favor, insira seu Telefone',
            endereco: 'Por favor, insira seu Endereço',
            cep: 'Por favor, insira seu Cep',
            cpf: 'Por favor, insira seu Cpf',

        },
        submitHandler: function  (form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
        
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos){
            alert(`Existem ${camposIncorretos} campos incorretos, Por favor, preencha os campos para prosseguir com a compra!`);
            }
        }
    })
})