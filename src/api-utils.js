import request from 'superagent'

const URL = 'https://frozen-anchorage-14022.herokuapp.com'

export async function getFruits() {

    const { body } = await request.get(`${URL}/fruits`)

    return body;
}

export async function getFruit(id) {

    const { body } = await request.get(`${URL}/fruits/${id}`)

    return body;
    
}

export async function getCategories() {
    
    const { body } = await request.get(`${URL}/categories`)

    return body;
    
}
    
export async function makeFruit(userFruit) {

    const { body } = await request.post(`${URL}/fruits/`)
        .send(userFruit);
    
    return body;
}

export async function deleteFruit(id) {
    
    const { body } = await request.delete(`${URL}/fruits/${id}`)

    return body;

}
export async function updateFruit(id ,userFruit) {

    const { body } = await request.put(`${URL}/fruits/${id}`)
        .send(userFruit);
    
    return body; 
    
}

export const getCategoryID = (fruit, categories) => categories.find(category => fruit.category === category.name_type).id;