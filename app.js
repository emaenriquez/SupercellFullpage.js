const web = new fullpage('#fullpage', {

    autoScrolling: true,
    scrollHorizontally: true,

    anchors: ['inicio', 'juegos', 'personajes', "redes"],
    // anchors: ["caba"],
    menu: '#myMenu',
    navigationTooltips: ['inicio', 'juegos', 'personajes', "redes"],
    // pone una barra de navegacion de puntos
    navigation: true,

    // cambia los colores de la seciones
    sectionsColor: ['#000', '#EEEEEE', '#11468F', '#DA1212'],

    css3: true,
    loopBottom: true,

    verticalCentered: true,

})