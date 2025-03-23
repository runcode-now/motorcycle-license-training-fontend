import { ROOT_API } from '../common/constants.js';

axios.get(`${ROOT_API}/api/Categories/getCategoryByType/theory`)
    .then(response => {
        const data = response.data;
        console.log(data);
        const tabs = document.getElementById('tabs');
        tabs.innerHTML = '';

        data.forEach(category => {
            const link = document.createElement('a');
            link.href = `/pages/user/question.html?categoryId=${category.categoryId}`;
            // link.href = `/pages/user/theory_question.html`;
            link.target = "_blank";
            link.classList.add('card');

            const img = document.createElement('img');
            img.src = category.imageUrl || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT16grhJ4JRdTUCGIKKzekwFvIXvPJ-cxyP6g&s";
            img.alt = category.categoryName;

            const text = document.createElement('p');
            text.innerText = category.categoryName;

            link.appendChild(img);
            link.appendChild(text);

            tabs.appendChild(link);
        });

        console.log(response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });