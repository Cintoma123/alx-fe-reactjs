import WelcomeMessage from './components/WelcomeMessage';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from './components/UserProfile';
import Header from './components/Header';
 
 function App() {
   return (
     <div className="App">
       <WelcomeMessage />
        <MainContent />
        <Footer />
        <UserProfile />
        <Header />
     </div>
   );
 }
 export default App;