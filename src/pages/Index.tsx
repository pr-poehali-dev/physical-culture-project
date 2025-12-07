import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
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

      <section id="textbook" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Учебник</h2>
            <p className="text-muted-foreground">Теоретическая база для изучения легкой атлетики</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="h-64 gradient-primary flex items-center justify-center">
                <Icon name="BookOpen" className="text-white" size={80} />
              </div>
              <CardHeader>
                <CardTitle>Основы легкой атлетики</CardTitle>
                <CardDescription>Учебное пособие по теории и методике преподавания</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline">
                  <Icon name="ExternalLink" className="mr-2" size={16} />
                  Открыть учебник
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6">Содержание курса</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-bold">1</span>
                      </div>
                      Введение в легкую атлетику
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    История развития легкой атлетики, основные дисциплины, правила соревнований и техника безопасности.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                        <span className="text-secondary font-bold">2</span>
                      </div>
                      Спринтерский бег: техника старта
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    Низкий старт, стартовые колодки, положение тела на старте, реакция на стартовый сигнал.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                        <span className="text-accent font-bold">3</span>
                      </div>
                      Стартовый разгон и бег по дистанции
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    Фазы стартового разгона, техника бега на максимальной скорости, работа рук и ног, постановка стопы.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-bold">4</span>
                      </div>
                      Финиширование и тактика
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    Техника финиша, распределение сил на дистанции, психологическая подготовка, соревновательная практика.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <section id="trainers" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Интерактивные тренажеры</h2>
            <p className="text-muted-foreground">Практические инструменты для отработки техники</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-xl transition-all">
              <div className="h-48 gradient-primary flex items-center justify-center">
                <Icon name="Timer" className="text-white" size={64} />
              </div>
              <CardHeader>
                <CardTitle>Тренажер времени реакции</CardTitle>
                <CardDescription>Отработка стартового ускорения</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline">
                  <Icon name="Play" className="mr-2" size={16} />
                  Запустить
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all">
              <div className="h-48 bg-secondary flex items-center justify-center">
                <Icon name="Footprints" className="text-white" size={64} />
              </div>
              <CardHeader>
                <CardTitle>Анализ техники бега</CardTitle>
                <CardDescription>Интерактивный разбор движений</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline">
                  <Icon name="Play" className="mr-2" size={16} />
                  Запустить
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all">
              <div className="h-48 bg-accent flex items-center justify-center">
                <Icon name="Target" className="text-white" size={64} />
              </div>
              <CardHeader>
                <CardTitle>Тестирование знаний</CardTitle>
                <CardDescription>Проверка теоретических основ</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline">
                  <Icon name="Play" className="mr-2" size={16} />
                  Запустить
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Видеоуроки по технике бега</CardTitle>
                <CardDescription>Профессиональная демонстрация техники спринта</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="start" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="start">Старт</TabsTrigger>
                    <TabsTrigger value="acceleration">Разгон</TabsTrigger>
                    <TabsTrigger value="running">Бег</TabsTrigger>
                    <TabsTrigger value="finish">Финиш</TabsTrigger>
                  </TabsList>
                  <TabsContent value="start" className="space-y-4">
                    <div className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Icon name="PlayCircle" className="mx-auto mb-4 text-primary" size={64} />
                        <p className="text-muted-foreground">Техника низкого старта</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      В этом видеоуроке разбирается правильная постановка стоп в колодках, положение рук и туловища на старте.
                    </p>
                  </TabsContent>
                  <TabsContent value="acceleration" className="space-y-4">
                    <div className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Icon name="PlayCircle" className="mx-auto mb-4 text-secondary" size={64} />
                        <p className="text-muted-foreground">Стартовый разгон</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Фазы стартового разгона, угол наклона туловища, частота и длина шага на первых 30 метрах.
                    </p>
                  </TabsContent>
                  <TabsContent value="running" className="space-y-4">
                    <div className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Icon name="PlayCircle" className="mx-auto mb-4 text-accent" size={64} />
                        <p className="text-muted-foreground">Бег по дистанции</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Работа рук и ног на максимальной скорости, правильная постановка стопы, дыхание.
                    </p>
                  </TabsContent>
                  <TabsContent value="finish" className="space-y-4">
                    <div className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Icon name="PlayCircle" className="mx-auto mb-4 text-primary" size={64} />
                        <p className="text-muted-foreground">Финиширование</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Техника финиша: бросок грудью, наклон на ленту, сохранение скорости на последних метрах.
                    </p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="tasks" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Практические задания</h2>
            <p className="text-muted-foreground">Закрепите знания на практике</p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Задание 1: Анализ техники старта</CardTitle>
                    <CardDescription>Сложность: Базовая</CardDescription>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                    Доступно
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  Изучите видеоматериал с техникой низкого старта и ответьте на контрольные вопросы по постановке ног, положению тела и работе рук.
                </p>
                <Button variant="outline" className="w-full">
                  Начать задание
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Задание 2: Хронометраж дистанции</CardTitle>
                    <CardDescription>Сложность: Средняя</CardDescription>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                    Доступно
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  Рассчитайте оптимальное распределение скорости на дистанции 100м, учитывая фазы разгона, максимальной скорости и финиширования.
                </p>
                <Button variant="outline" className="w-full">
                  Начать задание
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Задание 3: Составление тренировочного плана</CardTitle>
                    <CardDescription>Сложность: Продвинутая</CardDescription>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                    Требует завершения предыдущих
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  Разработайте недельный план тренировок для начинающего спринтера с учетом развития всех компонентов: техники, скорости, силы и выносливости.
                </p>
                <Button variant="outline" className="w-full" disabled>
                  Начать задание
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default Index;
