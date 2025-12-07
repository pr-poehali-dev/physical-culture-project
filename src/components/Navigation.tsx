import Icon from '@/components/ui/icon';

interface NavigationProps {
  scrollToSection: (sectionId: string) => void;
}

const Navigation = ({ scrollToSection }: NavigationProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <Icon name="Zap" className="text-white" size={24} />
            </div>
            <h1 className="text-2xl font-bold text-gradient">Легкая атлетика</h1>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('textbook')} className="text-sm font-medium hover:text-primary transition-colors">
              Учебник
            </button>
            <button onClick={() => scrollToSection('trainers')} className="text-sm font-medium hover:text-primary transition-colors">
              Тренажеры
            </button>
            <button onClick={() => scrollToSection('tasks')} className="text-sm font-medium hover:text-primary transition-colors">
              Задания
            </button>
            <button onClick={() => scrollToSection('course')} className="text-sm font-medium hover:text-primary transition-colors">
              О курсе
            </button>
            <button onClick={() => scrollToSection('author')} className="text-sm font-medium hover:text-primary transition-colors">
              Об авторе
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
