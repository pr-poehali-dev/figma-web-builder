import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      icon: 'Brain',
      title: 'Smart Component Creation',
      description: 'ИИ анализирует ваш дизайн Figma и автоматически создает переиспользуемые компоненты с оптимальной структурой.',
      color: 'from-purple-500 to-blue-500'
    },
    {
      icon: 'Zap',
      title: 'AI Code Generation',
      description: 'Преобразование дизайна в чистый, семантический код HTML/CSS/JS за секунды с поддержкой современных фреймворков.',
      color: 'from-blue-500 to-green-400'
    },
    {
      icon: 'Palette',
      title: 'Style Guide Automation',
      description: 'Автоматическое извлечение цветов, шрифтов и стилей для создания единого style guide проекта.',
      color: 'from-green-400 to-teal-400'
    },
    {
      icon: 'Figma',
      title: 'Deep Figma Integration',
      description: 'Прямая интеграция с Figma API для синхронизации изменений в реальном времени между дизайном и кодом.',
      color: 'from-teal-400 to-purple-500'
    }
  ];

  const integrations = [
    { name: 'Figma', icon: 'Figma', status: 'Active' },
    { name: 'React', icon: 'Code', status: 'Supported' },
    { name: 'TypeScript', icon: 'FileCode', status: 'Supported' },
    { name: 'Tailwind CSS', icon: 'Palette', status: 'Supported' },
    { name: 'GitHub', icon: 'Github', status: 'Coming Soon' },
    { name: 'Vercel', icon: 'Zap', status: 'Coming Soon' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="absolute top-0 w-full z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-green-400 rounded-lg flex items-center justify-center">
              <Icon name="Cpu" size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">AI Figma Platform</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Возможности</a>
            <a href="#integrations" className="text-gray-300 hover:text-white transition-colors">Интеграции</a>
            <a href="#docs" className="text-gray-300 hover:text-white transition-colors">Документация</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Контакты</a>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-300 hover:text-white">
              Войти
            </Button>
            <Button className="bg-gradient-to-r from-purple-500 to-green-400 hover:from-purple-600 hover:to-green-500 text-white border-0">
              Попробовать бесплатно
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-32 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30">
              <Icon name="Sparkles" size={16} className="mr-2" />
              Революция в веб-разработке
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Превращаем{' '}
              <span className="gradient-text animate-gradient-x">дизайн Figma</span>
              {' '}в код с помощью ИИ
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Автоматическое создание переиспользуемых компонентов, чистого кода 
              и полной интеграции с вашим дизайн-процессом
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-green-400 hover:from-purple-600 hover:to-green-500 text-white text-lg px-8 py-4 rounded-xl border-0"
              >
                <Icon name="Rocket" size={20} className="mr-2" />
                Начать создавать
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 text-lg px-8 py-4 rounded-xl"
              >
                <Icon name="Play" size={20} className="mr-2" />
                Посмотреть демо
              </Button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="hero-gradient rounded-3xl p-8 shadow-2xl animate-gradient-x">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-left">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <span className="text-white/70 text-sm">AI Figma Platform</span>
                </div>
                <div className="space-y-2 text-sm font-mono">
                  <div className="text-green-300">// Анализируем дизайн Figma...</div>
                  <div className="text-blue-300">const smartComponent = generateComponent(figmaDesign);</div>
                  <div className="text-purple-300">// Создаем переиспользуемые компоненты</div>
                  <div className="text-yellow-300">export default SmartButton;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-500/20 text-green-300 border-green-500/30">
              <Icon name="Cpu" size={16} className="mr-2" />
              AI-Возможности
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Умное создание компонентов
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Наша ИИ-система анализирует паттерны в дизайне и автоматически создает 
              оптимизированные, переиспользуемые компоненты
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className={`card-hover bg-white/5 backdrop-blur-sm border-white/10 cursor-pointer ${
                  hoveredFeature === index ? 'bg-white/10' : ''
                }`}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                    <Icon name={feature.icon as any} size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section id="integrations" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/30">
              <Icon name="Link" size={16} className="mr-2" />
              Интеграции
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Работает с вашим стеком
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Бесшовная интеграция с популярными инструментами и фреймворками
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration, index) => (
              <Card key={index} className="card-hover bg-white/5 backdrop-blur-sm border-white/10">
                <CardContent className="flex items-center justify-between p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                      <Icon name={integration.icon as any} size={20} className="text-white" />
                    </div>
                    <span className="text-white font-semibold text-lg">{integration.name}</span>
                  </div>
                  <Badge 
                    variant={integration.status === 'Active' ? 'default' : 'secondary'}
                    className={
                      integration.status === 'Active' 
                        ? 'bg-green-500/20 text-green-300 border-green-500/30' 
                        : integration.status === 'Supported'
                        ? 'bg-blue-500/20 text-blue-300 border-blue-500/30'
                        : 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30'
                    }
                  >
                    {integration.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-purple-500/10 to-green-400/10 backdrop-blur-sm border-white/10">
            <CardContent className="p-12">
              <Icon name="Rocket" size={48} className="text-green-400 mx-auto mb-6" />
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Готовы ускорить разработку?
              </h3>
              <p className="text-xl text-gray-300 mb-8">
                Присоединитесь к тысячам разработчиков, которые уже используют ИИ для создания компонентов
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-500 to-green-400 hover:from-purple-600 hover:to-green-500 text-white text-lg px-8 py-4 rounded-xl border-0"
                >
                  <Icon name="Play" size={20} className="mr-2" />
                  Начать бесплатно
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-4 rounded-xl"
                >
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Связаться с нами
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-green-400 rounded-lg flex items-center justify-center">
                <Icon name="Cpu" size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">AI Figma Platform</span>
            </div>
            
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Документация</a>
              <a href="#" className="hover:text-white transition-colors">Блог</a>
              <a href="#" className="hover:text-white transition-colors">Поддержка</a>
              <a href="#" className="hover:text-white transition-colors">Контакты</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
            <p>&copy; 2024 AI Figma Platform. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;