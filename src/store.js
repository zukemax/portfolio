import { reactive } from 'vue'
export const store = reactive({
    addPortfolioHeading: '',
    addPortfolioDescription: '',
    portfolios:[],
    async fetchPortfolios(){
        const res = await fetch('api/portfolios')  
        const data = await res.json();
        return  data
    },
    async fetchPortfolio(id){
        const res = await fetch(`api/portfolios/${id}`) 
        const data = await res.json();
        return  data
    },
    async deletePortfolio(id){
        const res = await fetch(`api/portfolios/${id}`,{
            method: 'DELETE',
        })
        res.status === 200 ? store.portfolios = store.portfolios.filter((portfolio)=>{
            return id != portfolio.id 
        }) : alert('error in deleting item')
       },
    async togglePortfolio(id){
        const portfolioToToggle = await this.fetchPortfolio(id);
        const updatePorfolio = {...portfolioToToggle, isChecked : !portfolioToToggle.isChecked}
    
        const res = await fetch(`api/portfolios/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatePorfolio)
        })
        const data = await res.json()
        store.portfolios = store.portfolios.map((portfolio)=> {
            return portfolio.id === id ? {...portfolio, isChecked : data.isChecked}: portfolio
        })
    },
    async addPortfolio(){
        if(store.addPortfolioHeading == '' || store.addPortfolioImageUrl == '' || store.addPortfolioDescription == ''){
            alert('Please enter portfolio')
        }else{
            const newPortfolio = {
                imageUrl: store.addPortfolioImageUrl,
                heading: store.addPortfolioHeading,
                description: store.addPortfolioDescription,
                isChecked: false
            }
            const res = await fetch('api/portfolios',{
                method: 'POST',
                headers: {
                    'Content-Type':'application/json',
                },
                body: JSON.stringify(newPortfolio)
                
            })
            const data = await res.json()
            
            store.portfolios = [...store.portfolios, data];
            
            store.addPortfolioImageUrl = '';
            store.addPortfolioHeading = '';
            store.addPortfolioDescription = '';
        }
    },
});