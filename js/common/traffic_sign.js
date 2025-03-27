const ROOT_API = 'http://103.179.185.149:8080'
axios.get(`${ROOT_API}/api/Category/getCategoryByType/traffic_sign`)
    .then(response => {

        const data = response.data;
        const tabs = document.getElementById('tabs');
        tabs.innerHTML = '';

        data.forEach(category => {
            const tab = document.createElement('div');
            tab.classList.add('tab');
            tab.innerText = category.categoryName;
            tab.onclick = () => showTab(category.categoryId);

            tabs.appendChild(tab);
        });

        console.log(response.data); 
    })
    .catch(error => {
        console.error('Error:', error); // Xử lý lỗi
    });

function showTab(categoryId) {
    console.log(categoryId);
    axios.get(`${ROOT_API}/api/TrafficSign/getByCategory/${categoryId}`)
        .then(response => {
            const data = response.data;
            const content = document.getElementById('content');
            content.innerHTML = '';

            data.forEach(sign => {
                const signElement = document.createElement('div');
                signElement.classList.add('warning-sign');
                signElement.innerHTML = `
                            <img src="${sign.imageUrl}" alt="${sign.trafficSignTitle}">
                            <div>
                                <h3>${sign.trafficSignTitle}</h3>
                                <p class="description">${sign.trafficSignContent}</p>
                            </div>
                        `;

                content.appendChild(signElement);
            });

            console.log(response.data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
