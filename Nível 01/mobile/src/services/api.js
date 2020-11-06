import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.132:3333'
});

export default api;

/**
 * IOS com Emulador: localhost
 * IOS com fisico: IP da maquina
 * Android com Emulador: localhost (adb reverse)
 * Android com Emulador: 10.0.2.2 (Android Studio)
 * Android com fisico: IP da maquina
 */