import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const ContentSections = () => {
  return (
    <>
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
    </>
  );
};

export default ContentSections;
