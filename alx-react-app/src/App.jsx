 import WelcomeMessage from './components/WelcomeMessage';
 import MainContent from './MainContent';
 import Footer from './Footer';
 
 function App() {
   return (
     <div className="App">
       <WelcomeMessage />
        <MainContent />
        <Footer />
        <UserProfile />
     </div>
   );
 }
 export default App;