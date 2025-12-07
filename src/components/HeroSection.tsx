import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Icon name="Award" size={20} />
            <span className="text-sm font-semibold">Образовательный портал БГПУ</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Физическая культура
            <br />
            <span className="text-gradient">Легкая атлетика</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Профессиональный курс по спринтерскому бегу на короткие дистанции с видеоуроками и интерактивными тренажерами
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white border-0 hover:opacity-90 transition-opacity" onClick={() => scrollToSection('textbook')}>
              <Icon name="BookOpen" className="mr-2" size={20} />
              Начать обучение
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('trainers')}>
              <Icon name="Play" className="mr-2" size={20} />
              Смотреть видеоуроки
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-20 animate-slide-up">
          <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                <Icon name="BookOpen" className="text-white" size={24} />
              </div>
              <CardTitle>Учебные материалы</CardTitle>
              <CardDescription>Полный курс теории и техники спринтерского бега</CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-secondary transition-all hover:shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                <Icon name="Dumbbell" className="text-white" size={24} />
              </div>
              <CardTitle>Интерактивные тренажеры</CardTitle>
              <CardDescription>Практические задания для отработки навыков</CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-accent transition-all hover:shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                <Icon name="Video" className="text-white" size={24} />
              </div>
              <CardTitle>Видеоуроки</CardTitle>
              <CardDescription>Наглядные демонстрации техники бега</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
