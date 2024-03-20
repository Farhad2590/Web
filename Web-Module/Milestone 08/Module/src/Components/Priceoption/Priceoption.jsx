import Priceoptions from "../Priceoptions/Priceoptions";


const Priceoption = () => {
    const Price = [
        {
          "id": "1",
          "name": "Basic Plan",
          "price": "$9.99",
          "features": [
            "10GB Storage",
            "Unlimited Bandwidth",
            "5 Email Accounts",
            "24/7 Support"
          ]
        },
        {
          "id": "2",
          "name": "Pro Plan",
          "price": "$19.99",
          "features": [
            "50GB Storage",
            "Unlimited Bandwidth",
            "20 Email Accounts",
            "24/7 Support",
            "Advanced Analytics"
          ]
        },
        {
          "id": "3",
          "name": "Enterprise Plan",
          "price": "$49.99",
          "features": [
            "100GB Storage",
            "Unlimited Bandwidth",
            "50 Email Accounts",
            "24/7 Priority Support",
            "Custom Solutions"
          ]
        }
      ]
    return (

        <div>
            <h1>Best Price in Town</h1>
            <div className="grid lg:grid-cols-3 gap-5 px-5">
            {
                Price.map(option => <Priceoptions key={option.id} option={option}></Priceoptions>)
            }
            
            </div>
           
        </div>
    );
};

export default Priceoption;