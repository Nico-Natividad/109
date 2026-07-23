import useStore from "../state/cart.js"



function Home(){
    const {user} = useStore();
    return(
        
        <div>
            <h1>Welcome to my online store!</h1>
            <p>
             Hellow My name is {user.name}
            </p>
        </div>
)
}
export default Home;