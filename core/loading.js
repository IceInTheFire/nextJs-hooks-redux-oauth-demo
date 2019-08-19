export const showLoading = () => {
    try{
        document.getElementById('loading').style.display = 'block'
    }catch(err) {

    }
}

export const hideLoading = () => {
    try{
        document.getElementById('loading').style.display = 'none'
    }catch(err){

    }
}