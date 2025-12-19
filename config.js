// config.js - GitHub Pages版本
const config = {
    // 生产环境API地址（根据你的实际后端服务器）
    apiBaseUrl: 'http://52.88.127.206:8080'
};

// 自动检测环境
(function() {
    // 如果是GitHub Pages环境
    if (window.location.hostname.includes('github.io')) {
        // GitHub Pages只支持HTTPS，但你的API是HTTP
        // 需要设置代理或使用HTTPS API
        console.log('检测到GitHub Pages环境');
        
        // 方案A：如果你的API支持HTTPS，修改为HTTPS地址
        // config.apiBaseUrl = 'https://你的域名';
        
        // 方案B：设置CORS代理（需要后端支持）
        // 可以在GitHub Pages上使用反向代理
    }
    
    // 本地开发环境
    if (window.location.hostname === 'localhost' || 
        window.location.hostname === '127.0.0.1') {
        console.log('本地开发环境');
        // 这里可以设置本地开发用的API地址
    }
})();
