import WelcomeMessage from './components/WelcomeMessage';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from './components/UserProfile';
import Header from './components/Header';
import Counter from './components/Counter';
 
 function App() {
   return (
     <div className="App">
       <WelcomeMessage />
        <MainContent />
        <Footer />
        <UserProfile />
        <Header />
        <Counter/>
     </div>
   );
 }
 export default App;