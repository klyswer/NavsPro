import { createStore } from "redux"

const initialState = {
    listProduct: [{
        "id": "1000",
        "title": "Lavanda Ensa",
        "precio": 16350,
        "formato": [1,10,25],
        "medida": "Lt",
        "cantidad": "100",
        "rutaImg": "/images/ensa.jpg",
        "alt": "Esencia Lavanda Detergente",
        "cat": "Es",
        "descript": "Esencia de Lavanda de gran potencia para productos dirigidos a la ropa.",
        "info": "Esencia de Lavanda de gran potencia para productos dirigidos a la ropa. Contiene elementos phgl para mayor duración en tu ropa, permitiendo mejor rendimiento y performance en tu producción y fidelizando clientela."
    },
    {
        "id": "1001",
        "title": "Limón Ropa",
        "precio": 11500,
        "formato": [1,10,25],
        "medida": "litro",
        "cantidad": "100",
        "rutaImg": "/images/lucta.jpg",
        "alt": "Alt de imagen",
        "cat": "Es",
        "descript": "Esencia olor a limón de gran calidad para productos dirigidos a la ropa.",
        "info": "Esencia de Lavanda de performance en tu producción y fidelizando clientela.  dirigidos a la ropa. Contiene elementos phgl para mayor , permitiendo gran potencia para productos mejor rendimiento y duración en tu ropa de performance en tu producción Esencia de Lavanda."
    },
    {
        "id": "1002",
        "title": "Vainilla Ropa",
        "precio": 11300,
        "medida": "litro",
        "formato": [1,10,25],
        "cantidad": "100",
        "rutaImg": "/images/cramer.jpg",
        "alt": "Alt de imagen",
        "cat": "Es",
        "descript": "Esencia olor a vainilla de gran calidad para productos dirigidos a la ropa.",
        "info": "Esencia de Lavanda de performance en tu producción y fidelizando clientela.  dirigidos a la ropa. Contiene elementos phgl para mayor , permitiendo gran potencia para productos mejor rendimiento y duración en tu ropa de performance en tu producción Esencia de Lavanda."
    },
    {
        "id": "1003",
        "title": "Omo Ropa",
        "precio": 11100,
        "medida": "litro",
        "formato": [1,10,25],
        "cantidad": "100",
        "rutaImg": "/images/ensa.jpg",
        "alt": "Alt de imagen",
        "cat": "Es",
        "descript": "Esencia Omo de gran concentración para detergentes de ropa.",
        "info": "Esencia de Lavanda de performance en tu producción y fidelizando clientela.  dirigidos a la ropa. Contiene elementos phgl para mayor , permitiendo gran potencia para productos mejor rendimiento y duración en tu ropa de performance en tu producción Esencia de Lavanda."
    },
    {
        "id": "5001",
        "title": "ÁCIDO CÍTRICO",
        "precio": 19703,
        "medida": "kg",
        "formato": 25,
        "cantidad": "100",
        "rutaImg": "/images/sacoCmc.jpg",
        "alt": "Ácido Cítrico",
        "cat": "Mp",
        "descript": "Ácido especial para detergente ropa. (pendiente)",
        "info": "(pendiente)- Permitiendo gran potencia para productos mejor rendimiento y duración en tu ropa de performance en tu producción Esencia de Lavanda. Esencia de Lavanda de performance en tu producción y fidelizando clientela.  dirigidos a la ropa. Contiene elementos phgl para mayor"
    },
    {
        "id": "5003",
        "title": "ÁCIDO SULFONICO 98%",
        "precio": 13585,
        "medida": "kg",
        "formato": 10,
        "cantidad": "100",
        "rutaImg": "/images/Acido_F.jpg",
        "alt": "Ácido Sulfónico",
        "cat": "Mp",
        "descript": "Ácido especial para detergente ropa. (pendiente)",
        "info": "(pendiente)- Potencia para productos mejor rendimiento  en tu ropa de performance Permitiendo gran  y duración en tu producción Esencia de Lavanda. Esencia de Lavanda de performance en tu producción y fidelizando clientela.  dirigidos a la ropa. Contiene elementos phgl para mayor"
    },
    {
        "id": "5005",
        "title": "ANILINA",
        "precio": 13000,
        "medida": "kg",
        "formato": 10,
        "cantidad": "100",
        "rutaImg": "/images/sacoCmc.jpg",
        "alt": "Anilina",
        "cat": "Mp",
        "descript": "Especialista en accdk eodlsdñ od. (pendiente)",
        "info": "(pendiente)- Potencia para productos mejor rendimiento  en tu ropa de performance Permitiendo gran  y duración en tu producción Esencia de Lavanda. Esencia de Lavanda de performance en tu producción y fidelizando clientela.  dirigidos a la ropa. Contiene elementos phgl para mayor"
    },
    {
        "id": "5006",
        "title": "ANTIESPUMANTE",
        "precio": 2785,
        "medida": "kg",
        "formato": 1,
        "cantidad": "100",
        "rutaImg": "/images/BidonBlanco.jpg",
        "alt": "Anilina",
        "cat": "Mp",
        "descript": "Especialista en accdk eodlsdñ od. (pendiente)",
        "info": "(pendiente)- Potencia para productos mejor rendimiento  en tu ropa de performance Permitiendo gran  y duración en tu producción Esencia de Lavanda. Esencia de Lavanda de performance en tu producción y fidelizando clientela.  dirigidos a la ropa. Contiene elementos phgl para mayor"
    },
    {
        "id": "5007",
        "title": "BETAÍNA",
        "precio": 913,
        "medida": "Lt",
        "formato": 1,
        "cantidad": "100",
        "rutaImg": "/images/Acido_F.jpg",
        "alt": "Betaína",
        "cat": "Mp",
        "descript": "Especialista en accdk eodlsdñ od. (pendiente)",
        "info": "(pendiente)- Potencia para productos mejor rendimiento  en tu ropa de performance Permitiendo gran  y duración en tu producción Esencia de Lavanda. Esencia de Lavanda de performance en tu producción y fidelizando clientela.  dirigidos a la ropa. Contiene elementos phgl para mayor"
    },
    {
        "id": "5008",
        "title": "BLANQUEADOR ÓPTICO",
        "precio": 22034,
        "medida": "Kg",
        "formato": 1,
        "cantidad": "100",
        "rutaImg": "/images/sacoCmc.jpg",
        "alt": "Blanquador óptico",
        "cat": "Mp",
        "descript": "Especialista en accdk eodlsdñ od. (pendiente)",
        "info": "(pendiente)- Potencia para productos mejor rendimiento  en tu ropa de performance Permitiendo gran  y duración en tu producción Esencia de Lavanda. Esencia de Lavanda de performance en tu producción y fidelizando clientela.  dirigidos a la ropa. Contiene elementos phgl para mayor"
    },
    {
        "id": "5009",
        "title": "BUTIL GLICOL",
        "precio": 1100,
        "medida": "Kg",
        "formato": 1,
        "cantidad": "100",
        "rutaImg": "/images/Bidon20L_F.jpg",
        "alt": "Butil Glicol",
        "cat": "Mp",
        "descript": "Especialista en accdk eodlsdñ od. (pendiente)",
        "info": "(pendiente)- Potencia para productos mejor rendimiento  en tu ropa de performance Permitiendo gran  y duración en tu producción Esencia de Lavanda. Esencia de Lavanda de performance en tu producción y fidelizando clientela.  dirigidos a la ropa. Contiene elementos phgl para mayor"
    },
    {
        "id": "5010",
        "title": "EDTA",
        "precio": 3146,
        "medida": "Kg",
        "formato": 1,
        "cantidad": "100",
        "rutaImg": "/images/EDTA.jpg",
        "alt": "edta",
        "cat": "Mp",
        "descript": "Especialista en accdk eodlsdñ od. (pendiente)",
        "info": "(pendiente)- Potencia para productos mejor rendimiento  en tu ropa de performance Permitiendo gran  y duración en tu producción Esencia de Lavanda. Esencia de Lavanda de performance en tu producción y fidelizando clientela.  dirigidos a la ropa. Contiene elementos phgl para mayor"
    },
    {
        "id": "5011",
        "title": "FLEXONIL ROJO",
        "precio": 6730,
        "medida": "Kg",
        "formato": 1,
        "cantidad": "100",
        "rutaImg": "/images/Bidon20L_F.jpg",
        "alt": "Flexonil rojo",
        "cat": "Mp",
        "descript": "Especialista en accdk eodlsdñ od. (pendiente)",
        "info": "(pendiente)- Potencia para productos mejor rendimiento  en tu ropa de performance Permitiendo gran  y duración en tu producción Esencia de Lavanda. Esencia de Lavanda de performance en tu producción y fidelizando clientela.  dirigidos a la ropa. Contiene elementos phgl para mayor"
    },
    {
        "id": "5012",
        "title": "FORMALINA (25kg)",
        "precio": 22770,
        "medida": "Kg",
        "formato": 25,
        "cantidad": "100",
        "rutaImg": "/images/Formalina_25.jpg",
        "alt": "Formalina",
        "cat": "Mp",
        "descript": "Especialista en accdk eodlsdñ od. (pendiente)",
        "info": "(pendiente)- Potencia para productos mejor rendimiento  en tu ropa de performance Permitiendo gran  y duración en tu producción Esencia de Lavanda. Esencia de Lavanda de performance en tu producción y fidelizando clientela.  dirigidos a la ropa. Contiene elementos phgl para mayor"
    },
    {
        "id": "5014",
        "title": "HIPOCLORITO DE SODIO AL 10%",
        "precio": 300,
        "medida": "Lt",
        "formato": 1,
        "cantidad": "100",
        "rutaImg": "/images/Bidon20L_F.jpg",
        "alt": "Hipoclorito de sodio.",
        "cat": "Mp",
        "descript": "Especialista en accdk eodlsdñ od. (pendiente)",
        "info": "(pendiente)- Potencia para productos mejor rendimiento  en tu ropa de performance Permitiendo gran  y duración en tu producción Esencia de Lavanda. Esencia de Lavanda de performance en tu producción y fidelizando clientela.  dirigidos a la ropa. Contiene elementos phgl para mayor"
    },
    {
        "id": "5015",
        "title": "HOSTATINT ROJO (BIDÓN 12.5)",
        "precio": 38500,
        "medida": "Kg",
        "formato": 12.5,
        "cantidad": "100",
        "rutaImg": "/images/Bidon20L_F.jpg",
        "alt": "Hostatint",
        "cat": "Mp",
        "descript": "Especialista en accdk eodlsdñ od. (pendiente)",
        "info": "(pendiente)- Potencia para productos mejor rendimiento  en tu ropa de performance Permitiendo gran  y duración en tu producción Esencia de Lavanda. Esencia de Lavanda de performance en tu producción y fidelizando clientela.  dirigidos a la ropa. Contiene elementos phgl para mayor"
    },
    {
        "id": "5016",
        "title": "LAURYL 70% (TAMBOR 170KG)",
        "precio": 187850,
        "medida": "Kg",
        "formato": 170,
        "cantidad": "100",
        "rutaImg": "/images/lauryl.jpg",
        "alt": "Lauryl Ether",
        "cat": "Mp",
        "descript": "Especialista en accdk eodlsdñ od. (pendiente)",
        "info": "(pendiente)- Potencia para productos mejor rendimiento  en tu ropa de performance Permitiendo gran  y duración en tu producción Esencia de Lavanda. Esencia de Lavanda de performance en tu producción y fidelizando clientela.  dirigidos a la ropa. Contiene elementos phgl para mayor"
    },
    {
        "id": "5017",
        "title": "MOWILITH 530 (LIGANTE/RESINA)",
        "precio": 1087,
        "medida": "Kg",
        "formato": 1,
        "cantidad": "100",
        "rutaImg": "/images/Bidon20L_F.jpg",
        "alt": "Mowlith 530",
        "cat": "Mp",
        "descript": "Especialista en accdk eodlsdñ od. (pendiente)",
        "info": "(pendiente)- Potencia para productos mejor rendimiento  en tu ropa de performance Permitiendo gran  y duración en tu producción Esencia de Lavanda. Esencia de Lavanda de performance en tu producción y fidelizando clientela.  dirigidos a la ropa. Contiene elementos phgl para mayor"
    },
    {
        "id": "5018",
        "title": "MOWILITH 7030 (ESPESANTE)",
        "precio": 1655,
        "medida": "Kg",
        "formato": 1,
        "cantidad": "100",
        "rutaImg": "/images/Bidon20L_F.jpg",
        "alt": "Mowlith 7030",
        "cat": "Mp",
        "descript": "Especialista en accdk eodlsdñ od. (pendiente)",
        "info": "(pendiente)- Potencia para productos mejor rendimiento  en tu ropa de performance Permitiendo gran  y duración en tu producción Esencia de Lavanda. Esencia de Lavanda de performance en tu producción y fidelizando clientela.  dirigidos a la ropa. Contiene elementos phgl para mayor"
    },
    {
        "id": "5019",
        "title": "MOWILITH 7410 (ABRILLANTADOR)",
        "precio": 2447,
        "medida": "Kg",
        "formato": 1,
        "cantidad": "100",
        "rutaImg": "/images/Bidon20L_F.jpg",
        "alt": "Mowlith 7410",
        "cat": "Mp",
        "descript": "Especialista en accdk eodlsdñ od. (pendiente)",
        "info": "(pendiente)- Potencia para productos mejor rendimiento  en tu ropa de performance Permitiendo gran  y duración en tu producción Esencia de Lavanda. Esencia de Lavanda de performance en tu producción y fidelizando clientela.  dirigidos a la ropa. Contiene elementos phgl para mayor"
    },
    {
        "id": "5020",
        "title": "MOWILITH 772 (ABRILLANTADOR)",
        "precio": 1878,
        "medida": "Kg",
        "formato": 25,
        "cantidad": "100",
        "rutaImg": "/images/Bidon20L_F.jpg",
        "alt": "Mowlith 772",
        "cat": "Mp",
        "descript": "Especialista en accdk eodlsdñ od. (pendiente)",
        "info": "(pendiente)- Potencia para productos mejor rendimiento  en tu ropa de performance Permitiendo gran  y duración en tu producción Esencia de Lavanda. Esencia de Lavanda de performance en tu producción y fidelizando clientela.  dirigidos a la ropa. Contiene elementos phgl para mayor"
    },
    {
        "id": "5021",
        "title": "NONIL FENOL 10 MOL",
        "precio": 1925,
        "medida": "Kg",
        "formato": 1,
        "cantidad": "100",
        "rutaImg": "/images/Bidon20L_F.jpg",
        "alt": "Nonil",
        "cat": "Mp",
        "descript": "Especialista en accdk eodlsdñ od. (pendiente)",
        "info": "(pendiente)- Potencia para productos mejor rendimiento  en tu ropa de performance Permitiendo gran  y duración en tu producción Esencia de Lavanda. Esencia de Lavanda de performance en tu producción y fidelizando clientela.  dirigidos a la ropa. Contiene elementos phgl para mayor"
    },
    {
        "id": "5022",
        "title": "OXIDO DE AMINA",
        "precio": 1595,
        "medida": "Kg",
        "formato": 1,
        "cantidad": "100",
        "rutaImg": "/images/Bidon20L_F.jpg",
        "alt": "Oxido de amina",
        "cat": "Mp",
        "descript": "Especialista en accdk eodlsdñ od. (pendiente)",
        "info": "(pendiente)- Potencia para productos mejor rendimiento  en tu ropa de performance Permitiendo gran  y duración en tu producción Esencia de Lavanda. Esencia de Lavanda de performance en tu producción y fidelizando clientela.  dirigidos a la ropa. Contiene elementos phgl para mayor"
    },
    {
        "id": "5023",
        "title": "PAPEL INDICADOR PH 1-14",
        "precio": 8745,
        "medida": "Und",
        "formato": 1,
        "cantidad": "100",
        "rutaImg": "/images/Bidon20L_F.jpg",
        "alt": "Papel ph indicador",
        "cat": "Mp",
        "descript": "Especialista en accdk eodlsdñ od. (pendiente)",
        "info": "(pendiente)- Potencia para productos mejor rendimiento  en tu ropa de performance Permitiendo gran  y duración en tu producción Esencia de Lavanda. Esencia de Lavanda de performance en tu producción y fidelizando clientela.  dirigidos a la ropa. Contiene elementos phgl para mayor"
    },
    {
        "id": "5024",
        "title": "SAL (SACO 25KG)",
        "precio": 2604,
        "medida": "Kg",
        "formato": 25,
        "cantidad": "100",
        "rutaImg": "/images/Saco_Sal.jpg",
        "alt": "Saco de sal 25kg",
        "cat": "Mp",
        "descript": "Especialista en accdk eodlsdñ od. (pendiente)",
        "info": "(pendiente)- Potencia para productos mejor rendimiento  en tu ropa de performance Permitiendo gran  y duración en tu producción Esencia de Lavanda. Esencia de Lavanda de performance en tu producción y fidelizando clientela.  dirigidos a la ropa. Contiene elementos phgl para mayor"
    },
    {
        "id": "5025",
        "title": "SODA CAUSTICA LIQUIDA (BIDÓN 25KG)",
        "precio": 15202,
        "medida": "Kg",
        "formato": 25,
        "cantidad": "100",
        "rutaImg": "/images/Formalina_25.jpg",
        "alt": "Soda caustica",
        "cat": "Mp",
        "descript": "Especialista en accdk eodlsdñ od. (pendiente)",
        "info": "(pendiente)- Potencia para productos mejor rendimiento  en tu ropa de performance Permitiendo gran  y duración en tu producción Esencia de Lavanda. Esencia de Lavanda de performance en tu producción y fidelizando clientela.  dirigidos a la ropa. Contiene elementos phgl para mayor"
    },
    {
        "id": "5027",
        "title": "ÁCIDO SULFÓNICO 98%",
        "precio": 1293,
        "medida": "Kg",
        "formato": 1,
        "cantidad": "100",
        "rutaImg": "/images/Acido_F.jpg",
        "alt": "Acido sulfónico",
        "cat": "Mp",
        "descript": "Especialista en accdk eodlsdñ od. (pendiente)",
        "info": "(pendiente)- Potencia para productos mejor rendimiento  en tu ropa de performance Permitiendo gran  y duración en tu producción Esencia de Lavanda. Esencia de Lavanda de performance en tu producción y fidelizando clientela.  dirigidos a la ropa. Contiene elementos phgl para mayor"
    },
    {
        "id": "5028",
        "title": "AGENTE PERLANTE",
        "precio": 2915,
        "medida": "Kg",
        "formato": 1,
        "cantidad": "100",
        "rutaImg": "/images/Bidon20L_F.jpg",
        "alt": "Agente perlante",
        "cat": "Mp",
        "descript": "Especialista en accdk eodlsdñ od. (pendiente)",
        "info": "(pendiente)- Potencia para productos mejor rendimiento  en tu ropa de performance Permitiendo gran  y duración en tu producción Esencia de Lavanda. Esencia de Lavanda de performance en tu producción y fidelizando clientela.  dirigidos a la ropa. Contiene elementos phgl para mayor"
    },
    {
        "id": "5032",
        "title": "DICROMATO DE SODIO",
        "precio": 2800,
        "medida": "Kg",
        "formato": 1,
        "cantidad": "100",
        "rutaImg": "/images/Bidon20L_F.jpg",
        "alt": "Dicromato de sodio",
        "cat": "Mp",
        "descript": "Especialista en accdk eodlsdñ od. (pendiente)",
        "info": "(pendiente)- Potencia para productos mejor rendimiento  en tu ropa de performance Permitiendo gran  y duración en tu producción Esencia de Lavanda. Esencia de Lavanda de performance en tu producción y fidelizando clientela.  dirigidos a la ropa. Contiene elementos phgl para mayor"
    },
    {
        "id": "5042",
        "title": "PROPILENGLICOL",
        "precio": 1606,
        "medida": "Kg",
        "formato": 1,
        "cantidad": "100",
        "rutaImg": "/images/Bidon20L_F.jpg",
        "alt": "Propilenglicol",
        "cat": "Mp",
        "descript": "Especialista en accdk eodlsdñ od. (pendiente)",
        "info": "(pendiente)- Potencia para productos mejor rendimiento  en tu ropa de performance Permitiendo gran  y duración en tu producción Esencia de Lavanda. Esencia de Lavanda de performance en tu producción y fidelizando clientela.  dirigidos a la ropa. Contiene elementos phgl para mayor"
    },
    {
        "id": "5043",
        "title": "ESPESANTE (DET. LIQ.)",
        "precio": 3000,
        "medida": "Kg",
        "formato": 1,
        "cantidad": "100",
        "rutaImg": "/images/Bidon20L_F.jpg",
        "alt": "Espesante detergente liquido",
        "cat": "Mp",
        "descript": "Especialista en accdk eodlsdñ od. (pendiente)",
        "info": "(pendiente)- Potencia para productos mejor rendimiento  en tu ropa de performance Permitiendo gran  y duración en tu producción Esencia de Lavanda. Esencia de Lavanda de performance en tu producción y fidelizando clientela.  dirigidos a la ropa. Contiene elementos phgl para mayor"
    },
    {
        "id": "5044",
        "title": "ALCOHOL ETOXILADO",
        "precio": 2317,
        "medida": "Kg",
        "formato": 1,
        "cantidad": "100",
        "rutaImg": "/images/Bidon20L_F.jpg",
        "alt": "Alcohol Etoxilado",
        "cat": "Mp",
        "descript": "Especialista en accdk eodlsdñ od. (pendiente)",
        "info": "(pendiente)- Potencia para productos mejor rendimiento  en tu ropa de performance Permitiendo gran  y duración en tu producción Esencia de Lavanda. Esencia de Lavanda de performance en tu producción y fidelizando clientela.  dirigidos a la ropa. Contiene elementos phgl para mayor"
    },
    {
        "id": "5049",
        "title": "PRESERVANTE (FUNGOZUR)",
        "precio": 902,
        "medida": "Kg",
        "formato": 1,
        "cantidad": "100",
        "rutaImg": "/images/Bidon20L_F.jpg",
        "alt": "Preservante",
        "cat": "Mp",
        "descript": "Especialista en accdk eodlsdñ od. (pendiente)",
        "info": "(pendiente)- Potencia para productos mejor rendimiento  en tu ropa de performance Permitiendo gran  y duración en tu producción Esencia de Lavanda. Esencia de Lavanda de performance en tu producción y fidelizando clientela.  dirigidos a la ropa. Contiene elementos phgl para mayor"
    },
    {
        "id": "5052",
        "title": "GLICERINA",
        "precio": 781,
        "medida": "Kg",
        "formato": 1,
        "cantidad": "100",
        "rutaImg": "/images/Bidon20L_F.jpg",
        "alt": "Glicerina",
        "cat": "Mp",
        "descript": "Especialista en accdk eodlsdñ od. (pendiente)",
        "info": "(pendiente)- Potencia para productos mejor rendimiento  en tu ropa de performance Permitiendo gran  y duración en tu producción Esencia de Lavanda. Esencia de Lavanda de performance en tu producción y fidelizando clientela.  dirigidos a la ropa. Contiene elementos phgl para mayor"
    },
    {
        "id": "5057",
        "title": "AOS 35",
        "precio": 660,
        "medida": "Kg",
        "formato": 1,
        "cantidad": "100",
        "rutaImg": "/images/Bidon20L_F.jpg",
        "alt": "AOS 35",
        "cat": "Mp",
        "descript": "Especialista en accdk eodlsdñ od. (pendiente)",
        "info": "(pendiente)- Potencia para productos mejor rendimiento  en tu ropa de performance Permitiendo gran  y duración en tu producción Esencia de Lavanda. Esencia de Lavanda de performance en tu producción y fidelizando clientela.  dirigidos a la ropa. Contiene elementos phgl para mayor"
    },
    {
        "id": "5148",
        "title": "TRIETANOLAMINA",
        "precio": 1683,
        "medida": "Kg",
        "formato": 1,
        "cantidad": "100",
        "rutaImg": "/images/Bidon20L_F.jpg",
        "alt": "Trietanolamina",
        "cat": "Mp",
        "descript": "Especialista en accdk eodlsdñ od. (pendiente)",
        "info": "(pendiente)- Potencia para productos mejor rendimiento  en tu ropa de performance Permitiendo gran  y duración en tu producción Esencia de Lavanda. Esencia de Lavanda de performance en tu producción y fidelizando clientela.  dirigidos a la ropa. Contiene elementos phgl para mayor"
    }],
    filterProduct: []
}

const reducerProduct = (state = initialState, action) => {
    // return state
    console.log(action.type)
    switch (action.type) {
        case 'FILTRAR_LISTA':
            return {
                ...state,
                filterProduct: state.filterProduct.concat(item => item.cat !== action.cat),
                listProduct: initialState.listProduct.filter(item => item.cat === action.cat)

            }
        case 'MOSTRAR_TODO':
            return {
                ...state,
                listProduct: initialState.listProduct,
                filterProduct: state.filterProduct.concat(item => item.cat !== action.cat)

            }
        // case 'S_BIDONES':
        //     return {
        //         ...state,

        //     }
        default:
            return state
    }

}

export default createStore(reducerProduct);