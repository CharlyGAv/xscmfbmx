import { ArrowRight } from 'lucide-react';

interface WelcomeScreenProps {
  onEnter: () => void;
}

export default function WelcomeScreen({ onEnter }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center px-4 transition-all duration-500">
      <div className="text-center space-y-8 max-w-md mx-auto">
        {/* Logo Section */}
        <div className="space-y-6">
          <div className="flex justify-center">
            <img 
              src="https://microformas.mx/wp-content/uploads/2022/03/microformas-logo.png" 
              alt="Microformas Logo"
              className="h-16 md:h-20 object-contain"
            />
          </div>
          <p className="text-slate-400 text-lg md:text-xl font-medium tracking-wide">
            SOLUCIONES PARA LA PRODUCTIVIDAD
          </p>
        </div>

        {/* Enter Button */}
        <button 
          onClick={onEnter}
          className="group bg-microformas-blue hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 mx-auto shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <span>Ingresar</span>
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 text-slate-500 text-sm">
        © 2025 Microformas
      </div>
    </div>
  );
}
