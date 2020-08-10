/**
 *  Este método recibe un String, devuelve el string en base 64.
 */
export function b64EncodeUnicode(str) {
  return btoa(
    encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => {
      return String.fromCharCode(`${"0x"}${p1}`);
    })
  );
}
/**
 *  Este método se le pasan 2 parametros, 1 recibe un array de elementos y 2 un elemento
 *  si ese elemento pasado existe dentro del array devuelve true.
 */

export const buscarElemento = (arr, val) => {
  return arr.some((item) => {
    return val === item;
  });
};
/**
 *  Este método recibe un array de objetos json, y un key
 *  devuelve un objeto con elementos ordenados alfabeticamente
 */
export const ordenarAsc = (array, key) => {
  array.sort((a, b) => {
    return a[key] > b[key];
  });
};
/**
 *  Este método recibe un (URL file local) para verificar su
 *  extención, si la extensión cumple [pdf, png, jpg, gif] retornando true.
 */
export const checkFileType = (file) => {
  const expRegular = /\.(pdf|png|jpg|gif)$/i;
  return expRegular.exec(file);
};

/**
 *  Este método recibe un (URL file local) para verificar su
 *  extención, si la extensión es [pdf] retornando true.
 */
export const checkFilePDF = (file) => {
  const expRegular = /\.(pdf)$/i;
  return expRegular.exec(file);
};
/**
 *  Este método recibe un file.size y un maxSize para verificar su
 *  tamaño, si el tamaño cumple la regla, retornando true.
 */
export const checkFileSize = (fileSize, maxSize) => {
  if (fileSize < maxSize) {
    return true;
  }
  return false;
};
/**
 *  Este método recibe una cadena numerica, retorna la
 *  cadena con formato de moneda local CLP.
 */
export const agregarformatoPesos = (numero) => {
  const formatter = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  });
  return formatter.format(numero);
};

/**
 *  Método que recibe una cadena de texto con el formato
 *  de moneda local, retorna la cadena sin formato.
 */
export const limpiarFormatoPesos = (string) => {
  return string
    .toString()
    .replace(/[.]/g, "")
    .replace("$", "");
};

/**
 *  Este método recibe una cadena y retorna true en
 *  caso de ser un valor numerico.
 */
export const validarNumero = (string) => {
  if (string !== undefined && !/^([0-9])*$/.test(string) && !/^\+([0-9])*$/.test(string)) {
    return false;
  }
  return true;
};

/**
 *  Este método recibe una cadena y retorna true en
 *  caso de ser un valor bifurcado con varios **** al inicio (permite ****).
 */
export const validarNumeroBifurcado = (string) => {
  if (string !== undefined && !/^\*\*\*\*([0-9])*$/.test(string)) {
    return false;
  }
  return true;
};

/**
 *  Este método recibe una cadena y retorna true en
 *  caso de ser un numero telefónico (admite simbolo +).
 */
export const validarNumTel = (string) => {
  if (string !== undefined && !/^\+([0-9])*$/.test(string)) {
    return false;
  }
  return true;
};

/**
 *  Este método recibe una cadena el cual la transforma en Number
 *  y posterior le da formato.
 */

export const formatNumberUtils = (value) => {
  return `$${Number(value)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
};
/**
 * Este método recibe un string, el cual retorna la
 * cadena sin caracteres especiales.
 */
export const quitarCaracteresEspeciales = (value) => {
  return value.replace(/[^A-Za-z0-9\s]/g, "");
};

/**
 * Este método recibe un date como parametro, retorna
 * un string con el formato 'yyyyMMdd'
 */
export const formatearFechaEspecial = (date) => {
  let fechaFormateada;
  if (date !== undefined && date !== null) {
    fechaFormateada = date
      .toISOString()
      .split("T")[0]
      .replace(/-/g, "");
  }
  return fechaFormateada;
};

/**
 * Parse a date con formato yyyyMMdd
 *
 */

export const parseDate = (str) => {
  if (!/^(\d){8}$/.test(str)) return "invalid date";
  const y = str.substr(0, 4);
  const m = str.substr(5, 2);
  const d = str.substr(7, 2);
  return new Date(y, m, d);
};

/**
 * Este método recibe un valor numerico, retorna el valor
 * redondeado con dos decimales.
 */
export const redondearDosDecimales = (numero) => {
  return Math.round(numero * 100) / 100;
};

/**
 * Ordenar lista de enfermedades
 */
export const ordenarEnfermedades = (listaDeEnfermedades) => {
  if (listaDeEnfermedades !== null) {
    listaDeEnfermedades.sort((a, b) => {
      const textA = a.label.toUpperCase();
      const textB = b.label.toUpperCase();
      return textA < textB ? -1 : 0;
    });
  }
  return listaDeEnfermedades;
};

/**
 * Método que recibe una cadena y valida que tenga formato de email
 * retorna true en caso de ser valido
 */
export const esEmailValido = (email) => {
  const expRegular = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  return expRegular.test(email.toLowerCase());
};

/**
 * Método que recibe un numero que queramos restarle al mes actual
 * retorna el numero del menos el numero de meses que pasamos por parametro.
 */
export const getMonthNow = (numero)=>{
  const d = new Date();
  const m = (d.getMonth()+1)-(numero);
  return m;
}

/**
 * Método que retorna nnombre del mes según mes numérico recibido.
 * @param {*} numeroMes parametro entero del 1 al 12
 */
export const obtenerNombreMeses = (numeroMes) => {
  switch (numeroMes) {
    case 1:
      return "Enero";
    case 2:
      return "Febrero";
    case 3:
      return "Marzo";
    case 4:
      return "Abril";
    case 5:
      return "Mayo";
    case 6:
      return "Junio";
    case 7:
      return "Julio";
    case 8:
      return "Agosto";
    case 9:
      return "Septiembre";
    case 10:
      return "Octubre";
    case 11:
      return "Noviembre";
    case 12:
      return "Diciembre";
    default:
      return "N/A";
  }
};

/**
 * Método que recibe una cadena  de 9 caracteres y NO valida numero  o dimension
 * un string con el formato 'NN****NNN' donde N es igual al resto de los numeros
 */

export const ocultarDatosTelefono = (telefono) => {
  const telefonoParseStrin = `${telefono}`;
  const newTelefono = telefonoParseStrin.split("");

  if (telefonoParseStrin.indexOf("+56") !== -1) {
    newTelefono.splice(0, 8, "+", "5","6","9","*", "*", "*", "*");
  return newTelefono.toString().replace(/,/g, "");
  }
    newTelefono.splice(0, 5, "+", "5","6","9","*", "*", "*", "*");
    return newTelefono.toString().replace(/,/g, "");
    
};
