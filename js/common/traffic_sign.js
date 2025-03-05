// import axios from 'axios';

// // let TRAFFIC_SIGN_API = ROOT_API + '/Categories';
// // let CATEGORY_API = ROOT_API + '/Categories';

// // http://localhost:5170/api/Categories/getCategoryByType/traffic_sign


// console.log('dsdsa')
// // axios.get(CATEGORY_API + "getCategoryByType/traffic_sign")
// axios.get('http://localhost:5170/api/Categories/getCategoryByType/traffic_sign')
//     .then(response => {
//         console.log(response);

//         const data = response.data;
//         const tabs = document.getElementById('tabs');
//         tabs.innerHTML = '';

//         data.forEach(category => {
//             const tab = document.createElement('div');
//             tab.classList.add('tab');
//             tab.innerText = category.name;
//             tab.onclick = () => showTab(category.name.toLowerCase().replace(' ', '-'));

//             tabs.appendChild(tab);
//         });


//         console.log(response.data); // Xử lý dữ liệu API
//     })
//     .catch(error => {
//         console.error('Error:', error); // Xử lý lỗi
//     });