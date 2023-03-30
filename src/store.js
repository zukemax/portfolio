import { reactive } from 'vue'
export const store = reactive({
    addPortfolioHeading: '',
    addPortfolioDescription: '',
    portfolios:[],
    async fetchPortfolios(){
        const res = await fetch('http://localhost:3000/portfolios')  
        const data = await res.json();
        return  data
    },
    async fetchPortfolio(id){
        const res = await fetch(`http://localhost:3000/portfolios/${id}`) 
        const data = await res.json();
        return  data
    },
    async addPortfolio(){
        if(store.addPortfolioHeading == ''){
            alert('Please enter portfolio')
          }else{
          const newPortfolio = {
            heading: store.addPortfolioHeading,
            description: store.addPortfolioDescription,
            isChecked: false
          }
          const res = await fetch('http://localhost:3000/portfolios',{
              method: 'POST',
              headers: {
              'Content-Type':'application/json',
              },
              body: JSON.stringify(newPortfolio)
              
          })
          const data = await res.json()
    
          store.portfolios = [...store.portfolios, data];
    
          store.addPortfolioHeading = '';
          store.addPortfolioDescription = '';
        }
    },
});