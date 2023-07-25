import { CategoriesProvider } from "./context/CategoriesProvider"
import { DrinksProvider } from "./context/DrinksProvider"
import { CartProvider } from "./context/CartProvider"
import MainLayout from "./layout"
import AppRoutes from "./routes"
import { ModalProvider } from "./context/ModalProvider"
import { AuthProvider } from "./context/AuthProvider"
import { BrowserRouter as Router } from "react-router-dom" 

function App() {

  return (
    <Router>
      <AuthProvider>
        <ModalProvider>
          <CartProvider>
            <MainLayout>
              <DrinksProvider>
                <CategoriesProvider>
                  <AppRoutes />
                </CategoriesProvider>
              </DrinksProvider>
            </MainLayout>
          </CartProvider>
        </ModalProvider>
      </AuthProvider>
    </Router>
  )
}//Hasta ahora estamos bien de contextos pero si esto crecería sería mejor aplicar redux

//Si tenemos la necesidad de que el header y el footer acceddan al contexto
//se pone por fuera del MainLayout. Por el contrario iría por dentro del MainLayout
export default App
