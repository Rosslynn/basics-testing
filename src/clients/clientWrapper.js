import axios from 'axios';

/**
 * Función para realizar una petición http tipo get a un endpoint
 * @param {String} url - URL
 * @param {Object} options - Opciones de la solicitud
 * @returns - Promesa con la respuesta
 */
export function makeGetRequest(url, options) {
  return axios.get(url, options);
}

/**
 * Función para realizar una petición http tipo post a un endpoint
 * @param {String} url - URL
 * @param {Object} body - Cuerpo de la solicitud
 * @param {Object} options - Opciones de la solicitud
 * @returns - Promesa con la respuesta
 */
export function makePostRequest(url, body, options) {
  return axios.post(url, body, options);
}

/**
 * Función para realizar una petición http tipo delete a un endpoint
 * @param {String} url - URL
 * @param {Object} body - Cuerpo de la solicitud
 * @param {Object} options - Opciones de la solicitud
 * @returns - Promesa con la respuesta
 */
export function makeDeleteRequest(url, options) {
  return axios.delete(url, options);
}

/**
 * Función para realizar una petición http tipo put a un endpoint
 * @param {String} url - URL
 * @param {Object} body - Cuerpo de la solicitud
 * @param {Object} options - Opciones de la solicitud
 * @returns - Promesa con la respuesta
 */
export function makePutRequest(url, body, options) {
  return axios.put(url, body, options);
}
