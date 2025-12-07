import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface InfoSectionsProps {
  scrollToSection: (sectionId: string) => void;
}

const InfoSections = ({ scrollToSection }: InfoSectionsProps) => {
  return (
    <>
      <section id="course" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">О курсе</h2>
            <p className="text-muted-foreground">Полная информация об образовательной программе</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Физическая культура: Легкая атлетика</CardTitle>
              <CardDescription>Образовательный курс БГПУ, факультет ФКС</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Icon name="Target" size={20} className="text-primary" />
                  Цели курса
                </h3>
                <p className="text-muted-foreground">
                  Формирование профессиональных компетенций в области теории и методики преподавания легкой атлетики, с акцентом на спринтерский бег на короткие дистанции.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Icon name="Users" size={20} className="text-secondary" />
                  Целевая аудитория
                </h3>
                <p className="text-muted-foreground">
                  Студенты 4 курса факультета физической культуры и спорта, будущие преподаватели физической культуры.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Icon name="Clock" size={20} className="text-accent" />
                  Продолжительность
                </h3>
                <p className="text-muted-foreground">
                  Курс рассчитан на один семестр (72 академических часа): 36 часов теории и 36 часов практических занятий.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Icon name="GraduationCap" size={20} className="text-primary" />
                  Результаты обучения
                </h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Владение техникой спринтерского бега на короткие дистанции</li>
                  <li>Умение анализировать и корректировать технику бега</li>
                  <li>Навыки планирования тренировочного процесса</li>
                  <li>Знание методики преподавания легкой атлетики</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="author" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Об авторе</h2>
            <p className="text-muted-foreground">Информация о разработчике курса</p>
          </div>

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-3">
                <div className="gradient-primary md:col-span-1 p-8 flex items-center justify-center">
                  <div className="w-40 h-40 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Icon name="User" className="text-white" size={80} />
                  </div>
                </div>
                <div className="md:col-span-2 p-8">
                  <h3 className="text-2xl font-bold mb-2">Шелахова Светлана Евгеньевна</h3>
                  <p className="text-muted-foreground mb-6">
                    Студент 4 курса БГПУ, факультет физической культуры и спорта
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="GraduationCap" size={18} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Образование</p>
                        <p className="text-sm text-muted-foreground">
                          Благовещенский государственный педагогический университет, факультет ФКС
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="BookOpen" size={18} className="text-secondary" />
                      </div>
                      <div>
                        <p className="font-medium">Специализация</p>
                        <p className="text-sm text-muted-foreground">
                          Теория и методика преподавания физической культуры, легкая атлетика
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Trophy" size={18} className="text-accent" />
                      </div>
                      <div>
                        <p className="font-medium">Достижения</p>
                        <p className="text-sm text-muted-foreground">
                          Разработка интерактивных образовательных материалов по легкой атлетике
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 bg-slate-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                  <Icon name="Zap" className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold">Легкая атлетика</h3>
              </div>
              <p className="text-slate-400 text-sm">
                Образовательный портал БГПУ по физической культуре
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <button onClick={() => scrollToSection('textbook')} className="hover:text-white transition-colors">
                    Учебник
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('trainers')} className="hover:text-white transition-colors">
                    Тренажеры
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('tasks')} className="hover:text-white transition-colors">
                    Задания
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('course')} className="hover:text-white transition-colors">
                    О курсе
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <p className="text-sm text-slate-400 mb-2">
                Благовещенский государственный педагогический университет
              </p>
              <p className="text-sm text-slate-400">
                Факультет физической культуры и спорта
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-400">
            <p>© 2024 БГПУ. Образовательный портал по легкой атлетике</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default InfoSections;
