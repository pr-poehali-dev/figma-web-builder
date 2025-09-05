import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Create = () => {
  const [description, setDescription] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('modern');
  const [selectedFont, setSelectedFont] = useState('inter');
  const [generating, setGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [generatedCode, setGeneratedCode] = useState('');
  const [previewMode, setPreviewMode] = useState('desktop');

  const designStyles = [
    { id: 'modern', name: 'Modern', description: 'Чистый минимализм', color: 'from-blue-500 to-purple-500' },
    { id: 'creative', name: 'Creative', description: 'Яркие акценты', color: 'from-pink-500 to-orange-500' },
    { id: 'corporate', name: 'Corporate', description: 'Деловой стиль', color: 'from-gray-600 to-blue-600' },
    { id: 'tech', name: 'Tech', description: 'Футуристичный', color: 'from-green-400 to-blue-500' }
  ];

  const fonts = [
    { id: 'inter', name: 'Inter', preview: 'Современный и читаемый' },
    { id: 'roboto', name: 'Roboto', preview: 'Универсальный Google шрифт' },
    { id: 'montserrat', name: 'Montserrat', preview: 'Стильный для заголовков' },
    { id: 'opensans', name: 'Open Sans', preview: 'Дружелюбный и чистый' }
  ];

  const handleGenerate = async () => {
    if (!description.trim()) return;
    
    setGenerating(true);
    setProgress(0);
    
    // Simulation of AI generation process
    const steps = [
      'Анализируем описание...',
      'Выбираем компоненты...',
      'Применяем дизайн-систему...',
      'Генерируем код...',
      'Оптимизируем результат...'
    ];

    for (let i = 0; i < steps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 800));
      setProgress((i + 1) * 20);
    }

    // Mock generated code
    const mockCode = `import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const GeneratedComponent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <header className="px-6 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          ${description.slice(0, 30)}...
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          Автоматически сгенерированный компонент на основе вашего описания
        </p>
      </header>
      
      <main className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8">
            <CardHeader>
              <CardTitle>AI Generated Content</CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="bg-${selectedStyle === 'modern' ? 'blue' : selectedStyle === 'creative' ? 'pink' : selectedStyle === 'corporate' ? 'gray' : 'green'}-500 hover:bg-${selectedStyle === 'modern' ? 'blue' : selectedStyle === 'creative' ? 'pink' : selectedStyle === 'corporate' ? 'gray' : 'green'}-600">
                Действие
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default GeneratedComponent;`;

    setGeneratedCode(mockCode);
    setGenerating(false);
    setProgress(100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="px-6 py-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="text-gray-300 hover:text-white"
              onClick={() => window.history.back()}
            >
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              Назад
            </Button>
            <div className="w-px h-6 bg-white/20"></div>
            <h1 className="text-2xl font-bold text-white">AI Генератор Сайтов</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
              <Icon name="Sparkles" size={16} className="mr-2" />
              AI Powered
            </Badge>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Panel */}
          <div className="space-y-8">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Icon name="PenTool" size={20} className="mr-2 text-purple-400" />
                  Описание сайта
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Опишите, какой сайт вы хотите создать
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="description" className="text-white mb-2 block">
                    Что должен делать ваш сайт?
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Например: лендинг для IT-компании с hero-секцией, блоком услуг, отзывами и контактами"
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 min-h-[120px]"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-white mb-2 block">Стиль дизайна</Label>
                    <Select value={selectedStyle} onValueChange={setSelectedStyle}>
                      <SelectTrigger className="bg-white/5 border-white/20 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {designStyles.map(style => (
                          <SelectItem key={style.id} value={style.id}>
                            <div className="flex items-center space-x-2">
                              <div className={`w-4 h-4 rounded bg-gradient-to-r ${style.color}`}></div>
                              <span>{style.name}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label className="text-white mb-2 block">Шрифт</Label>
                    <Select value={selectedFont} onValueChange={setSelectedFont}>
                      <SelectTrigger className="bg-white/5 border-white/20 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {fonts.map(font => (
                          <SelectItem key={font.id} value={font.id}>
                            {font.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button 
                  onClick={handleGenerate}
                  disabled={!description.trim() || generating}
                  className="w-full bg-gradient-to-r from-purple-500 to-green-400 hover:from-purple-600 hover:to-green-500 text-white border-0"
                  size="lg"
                >
                  {generating ? (
                    <>
                      <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                      Генерируем...
                    </>
                  ) : (
                    <>
                      <Icon name="Wand2" size={20} className="mr-2" />
                      Сгенерировать сайт
                    </>
                  )}
                </Button>

                {generating && (
                  <div className="space-y-2">
                    <Progress value={progress} className="w-full" />
                    <p className="text-sm text-gray-400 text-center">
                      {progress < 20 ? 'Анализируем описание...' :
                       progress < 40 ? 'Выбираем компоненты...' :
                       progress < 60 ? 'Применяем дизайн-систему...' :
                       progress < 80 ? 'Генерируем код...' :
                       progress < 100 ? 'Оптимизируем результат...' : 'Готово!'}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Design Style Preview */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Icon name="Palette" size={20} className="mr-2 text-purple-400" />
                  Выбранный стиль
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {designStyles.map(style => (
                    <div
                      key={style.id}
                      className={`cursor-pointer p-4 rounded-lg border transition-all ${
                        selectedStyle === style.id
                          ? 'border-purple-400 bg-purple-500/10'
                          : 'border-white/10 bg-white/5 hover:bg-white/10'
                      }`}
                      onClick={() => setSelectedStyle(style.id)}
                    >
                      <div className={`w-full h-16 rounded bg-gradient-to-r ${style.color} mb-2`}></div>
                      <h4 className="text-white font-semibold">{style.name}</h4>
                      <p className="text-xs text-gray-400">{style.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview Panel */}
          <div className="space-y-6">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white flex items-center">
                    <Icon name="Eye" size={20} className="mr-2 text-green-400" />
                    Предварительный просмотр
                  </CardTitle>
                  
                  <div className="flex items-center space-x-2">
                    <Button
                      variant={previewMode === 'desktop' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setPreviewMode('desktop')}
                      className="text-white"
                    >
                      <Icon name="Monitor" size={16} />
                    </Button>
                    <Button
                      variant={previewMode === 'mobile' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setPreviewMode('mobile')}
                      className="text-white"
                    >
                      <Icon name="Smartphone" size={16} />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className={`border-2 border-dashed border-white/20 rounded-lg ${previewMode === 'mobile' ? 'max-w-sm mx-auto' : 'w-full'} h-96 bg-white/5 flex items-center justify-center`}>
                  {generatedCode ? (
                    <div className="text-center">
                      <Icon name="CheckCircle" size={48} className="text-green-400 mx-auto mb-4" />
                      <p className="text-white font-semibold">Сайт сгенерирован!</p>
                      <p className="text-gray-400 text-sm">Код готов к экспорту</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <Icon name="Globe" size={48} className="text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-400">Здесь появится превью</p>
                      <p className="text-gray-500 text-sm">Введите описание и нажмите "Генерировать"</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Generated Code */}
            {generatedCode && (
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Icon name="Code" size={20} className="mr-2 text-blue-400" />
                    Сгенерированный код
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="react" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="react">React</TabsTrigger>
                      <TabsTrigger value="html">HTML</TabsTrigger>
                      <TabsTrigger value="css">CSS</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="react" className="mt-4">
                      <div className="bg-slate-900 rounded-lg p-4 max-h-64 overflow-auto">
                        <pre className="text-sm text-gray-300">
                          <code>{generatedCode}</code>
                        </pre>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="html" className="mt-4">
                      <div className="bg-slate-900 rounded-lg p-4 max-h-64 overflow-auto">
                        <pre className="text-sm text-gray-300">
                          <code>{`<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Сгенерированный сайт</title>
    <link href="https://fonts.googleapis.com/css2?family=${selectedFont}" rel="stylesheet">
</head>
<body>
    <!-- Автоматически сгенерированный HTML -->
</body>
</html>`}</code>
                        </pre>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="css" className="mt-4">
                      <div className="bg-slate-900 rounded-lg p-4 max-h-64 overflow-auto">
                        <pre className="text-sm text-gray-300">
                          <code>{`/* Автоматически сгенерированные стили */
body {
    font-family: '${fonts.find(f => f.id === selectedFont)?.name}', sans-serif;
    margin: 0;
    padding: 0;
}

.hero-section {
    background: linear-gradient(135deg, ${
      selectedStyle === 'modern' ? '#3B82F6, #8B5CF6' :
      selectedStyle === 'creative' ? '#EC4899, #F97316' :
      selectedStyle === 'corporate' ? '#4B5563, #2563EB' :
      '#10B981, #3B82F6'
    });
}`}</code>
                        </pre>
                      </div>
                    </TabsContent>
                  </Tabs>

                  <div className="flex gap-4 mt-4">
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                      <Icon name="Download" size={16} className="mr-2" />
                      Скачать код
                    </Button>
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                      <Icon name="Copy" size={16} className="mr-2" />
                      Копировать
                    </Button>
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                      <Icon name="Share" size={16} className="mr-2" />
                      Поделиться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;