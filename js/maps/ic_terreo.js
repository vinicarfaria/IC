/*!
 *
 * Jquery Mapael - Dynamic maps jQuery plugin (based on raphael.js)
 * Requires jQuery and Mapael >=2.0.0
 *
 * Map of IC-Terreo
 * 
 * @author Vinicius
 */
(function (factory) {
    if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory(require('jquery'), require('jquery-mapael'));
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery', 'mapael'], factory);
    } else {
        // Browser globals
        factory(jQuery, jQuery.mapael);
    }
}(function ($, Mapael) {

    "use strict";
    
    $.extend(true, Mapael,
        {
            maps :  {
                ic_terreo : {
                    width : 700,
                    height : 700,
                    getCoords : function (lat, lon) {
                        // todo
                        return {"x" : long, "y" : lat};
                    },
                    elems: {
                        "ApoioTecnico" : "M 292,582 C 292,582 292,670 292,670 292,670 268,670 268,670 268,670 268,582 268,582 268,582 292,582 292,582 Z",
                        "Auditorio" : "M 404,50 C 404,50 404,224 404,224 404,224 155,224 155,224 155,224 155,50 155,50 155,50 404,50 404,50 Z",
                        "BanheirosAudit" : "M 100,50 C 100,50 100,201 100,201 100,201 8,201 8,201 8,201 8,50 8,50 8,50 100,50 100,50 Z",
                        "BanheirosHall" : "M 237,457 C 237,457 237,557 237,557 237,557 178,557 178,557 178,557 178,457 178,457 178,457 237,457 237,457 Z",
                        "CA" : "M 140,538 C 140,538 140,643 140,643 140,643 84,643 84,643 84,643 84,538 84,538 84,538 140,538 140,538 Z",
                        "Cantina" : "M 140,258 C 140,258 140,420 140,420 140,420 8,420 8,420 8,420 8,258 8,258 8,258 140,258 140,258 Z",
                        "CB01" : "M 327,462 C 327,462 327,550 327,550 327,550 258,550 258,550 258,550 258,521 258,521 258,521 240,521 240,521 240,521 240,462 240,462 240,462 327,462 327,462 Z",
                        "CB02" : "M 418,462 C 418,462 418,550 418,550 418,550 329,550 329,550 329,550 329,462 329,462 329,462 418,462 418,462 Z",
                        "CB03" : "M 511,462 C 511,462 511,550 511,550 511,550 420,550 420,550 420,550 420,462 420,462 420,462 511,462 511,462 Z",
                        "CB04" : "M 419,582 C 419,582 419,670 419,670 419,670 294,670 294,670 294,670 294,582 294,582 294,582 419,582 419,582 Z",
                        "CB05" : "M 510,582 C 510,582 510,670 510,670 510,670 420,670 420,670 420,670 420,582 420,582 420,582 510,582 510,582 Z",
                        "Coord" : "M 678,50 C 678,50 678,224 678,224 678,224 588,224 588,224 588,224 588,108 588,108 588,108 498,108 498,108 498,108 498,50 498,50 498,50 678,50 678,50 Z",
                        "Corredores" : "M 152,203 C 152,203 152,228 152,228 152,228 676,228 676,228 676,228 676,257 676,257 676,257 532,257 532,257 532,257 532,323 532,323 532,323 531,340 531,340 531,340 531,554 531,554 531,554 568,554 568,554 568,554 568,580 568,580 568,580 266,580 266,580 266,580 266,670 266,670 266,670 262,670 262,670 262,670 262,685 262,685 262,685 236,685 236,685 236,685 236,670 236,670 236,670 229,670 229,670 229,670 229,599 229,599 229,599 143,599 143,599 143,599 143,425 143,425 143,425 143,337 143,337 143,337 142,322 142,322 142,322 142,255 142,255 142,255 34,255 34,255 34,255 34,203 34,203 34,203 152,203 152,203 Z M 402,257 C 402,257 402,330 402,330 402,330 176,330 176,330 176,330 176,562 176,562 176,562 239,562 239,562 239,562 239,554 239,554 239,554 513,554 513,554 513,554 513,331 513,331 513,331 500,331 500,331 500,331 500,257 500,257 500,257 402,257 402,257 Z",
                        "Direcao" : "M 449,50 C 449,50 449,224 449,224 449,224 407,224 407,224 407,224 407,50 407,50 407,50 449,50 449,50 Z",
                        "Elevador" : "M 255,524 C 255,524 255,548 255,548 255,548 240,548 240,548 240,548 240,524 240,524 240,524 255,524 255,524 Z",
                        "Escadas" : "M 227,601 C 227,601 227,675 227,675 227,675 176,675 176,675 176,675 176,601 176,601 176,601 227,601 227,601 Z",
                        "EscadasAudit" : "M 152,122 C 152,122 152,201 152,201 152,201 102,201 102,201 102,201 102,122 102,122 102,122 152,122 152,122 Z",
                        "EscadasLabs" : "M 498,260 C 498,260 498,340 498,340 498,340 405,340 405,340 405,340 405,260 405,260 405,260 498,260 498,260 Z",
                        "EscadasProf" : "M 567,472 C 567,472 567,552 567,552 567,552 533,552 533,552 533,552 533,472 533,472 533,472 567,472 567,472 Z",
                        "Jardim" : "M 403,333 C 403,333 403,342 403,342 403,342 500,342 500,342 500,342 500,333 500,333 500,333 510,333 510,333 510,333 510,459 510,459 510,459 240,459 240,459 240,459 240,454 240,454 240,454 178,454 178,454 178,454 178,333 178,333 178,333 403,333 403,333 Z",
                        "NUTI" : "M 678,260 C 678,260 678,334 678,334 678,334 535,334 535,334 535,334 535,260 535,260 535,260 678,260 678,260 Z",
                        "Pos" : "M 495,50 C 495,50 495,224 495,224 495,224 452,224 452,224 452,224 452,50 452,50 452,50 495,50 495,50 Z",
                        "Video" : "m 585,113 c 0,0 0,111 0,111 0,0 -87,0 -87,0 0,0 0,-111 0,-111 0,0 87,0 87,0 z"
                    }
                }
            }
        }
    );

    return Mapael;

}));