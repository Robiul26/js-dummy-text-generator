
const dummy_text = [
    ' Lorem ipsum dolor, sit amet consectetur adipisicing elit.Saepe, consectetur vel architecto ad    voluptatibus sunt necessitatibus, exercitationem atque facere amet inventore natus error! Esse cum,    nihil maiores temporibus amet sed eos nisi totam, labore reprehenderit corporis fugit quam quae dolor.',

    ' Laboriosam odit ? At eius velit ducimus, consequuntur ea maxime magni odio autem magnam dolores similique    labore rem sapiente nihil assumenda cum corrupti nesciunt! Autem a adipisci nemo non, accusantium quis    ab.Repellat, pariatur voluptatibus earum architecto ad impedit, excepturi quos, exercitationem natus.',

    '  Praesentium alias repudiandae iure veniam! Placeat iste provident earum numquam aliquam distinctio,    minima nobis nisi amet alias eveniet beatae aperiam voluptates quia architecto natus! Officia, et fuga    voluptatem alias voluptatibus provident culpa animi illo rem nobis atque sapiente eum consequatur sint.',


    ' Cupiditate error ipsam aperiam quis ad corporis ea ? Expedita, aspernatur.Voluptates tenetur qui maiores    quasi fuga ipsam tempore debitis quibusdam beatae placeat culpa, odit voluptas id fugit quidem ad    repudiandae quaerat minus.Magni eligendi repellendus inventore quibusdam amet suscipit veniam.',

    'Raboriosam totam officia nulla ? Error non, blanditiis laborum atque et quos soluta neque itaque    accusantium voluptatibus mollitia provident voluptates eveniet rem dolorum earum at rerum quae quaerat    sequi voluptate vel nostrum nesciunt delectus.Nemo facilis amet, maxime iure nisi quisquam ea veritatis.',

    'Wquod enim, et libero officia voluptates optio quae iste nihil omnis architecto vero aperiam vitae velit ?        Illo tempore, illum modi aut libero, quisquam commodi pariatur ut explicabo quis possimus veniam ipsa    adipisci eum ? Nemo non excepturi esse adipisci dolore placeat aliquam voluptatum totam similique aliquid.',

    'Hey quos voluptatem doloribus quasi necessitatibus suscipit possimus, porro at blanditiis sed ? Eius maxime    totam, sequi velit, repellendus voluptatem possimus inventore eveniet est provident similique illo    perferendis.Necessitatibus nesciunt facere natus magnam quam ex accusamus voluptatem eum placeat.',

    'Nce provident, dolorem sint tempore mollitia vero cumque modi quod.Consectetur similique deleniti    repudiandae, libero ex nobis, aspernatur ducimus quod, quae dolores ut maxime corrupti animi aliquid ?        Deserunt inventore possimus nisi ullam itaque eveniet aperiam laboriosam nostrum ? Adipisci accusamus.',

    'Boy delectus expedita veniam.Optio provident voluptas, magnam illum quod porro assumenda ad in veniam non    sapiente, eius sint adipisci praesentium architecto culpa laboriosam quae accusamus facere aspernatur    perspiciatis! Dolorum magni in id animi ratione, harum reprehenderit cupiditate inventore libero.'
];

const inputNumber = document.getElementById('inputNumber');
const form = document.getElementById('form');
const result = document.getElementById('result');



form.addEventListener('submit', (e) => {
    e.preventDefault();
    const amount = Number(inputNumber.value);
    const rendom = Math.floor(Math.random() * dummy_text.length);

    // for display show dummy_text box
    document.querySelector('.textBox').style.display = "block";
    
    // for empty, negetive number, grater then 9
    if (isNaN(amount) || amount <= 0 || amount > 9) {
        result.innerHTML = `<p>${dummy_text[rendom]}</p>`;
    } else {
        const arraySlice = dummy_text.slice(0, amount);
        // console.log(arraySlice);
        const data = arraySlice.map((para) => {
            return `<p>${para}</p>`;
        }).join('');
        result.innerHTML = data;

    }
});