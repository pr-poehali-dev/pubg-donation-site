import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const donatPackages = [
    {
      id: 1,
      amount: 60,
      price: 65,
      bonus: 0,
      popular: false
    },
    {
      id: 2,
      amount: 325,
      price: 350,
      bonus: 25,
      popular: true
    },
    {
      id: 3,
      amount: 660,
      price: 700,
      bonus: 60,
      popular: false
    },
    {
      id: 4,
      amount: 1800,
      price: 1850,
      bonus: 300,
      popular: false
    }
  ];

  const benefits = [
    {
      icon: "Zap",
      title: "Мгновенная доставка",
      description: "UC моментально зачисляются на ваш игровой аккаунт"
    },
    {
      icon: "Shield",
      title: "Безопасные платежи",
      description: "Защищенные транзакции и полная конфиденциальность"
    },
    {
      icon: "Headphones",
      title: "Поддержка 24/7",
      description: "Всегда готовы помочь решить любой вопрос"
    },
    {
      icon: "Gift",
      title: "Бонусы к покупке",
      description: "Получайте дополнительные UC при покупке больших пакетов"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-card">
      <div 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.85), rgba(17, 24, 39, 0.85)), url('https://cdn.poehali.dev/projects/1fc88443-d6df-43ef-906d-5d5b953c7fec/files/da8452e3-46ef-46bb-a22f-11b33ab0c60e.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 animate-gradient-shift bg-[length:200%_200%]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-8 animate-fade-in">
            <Badge className="text-lg px-6 py-2 bg-primary/80 backdrop-blur-sm">
              <Icon name="Trophy" size={20} className="mr-2 inline" />
              Официальный донат PUBG
            </Badge>
            
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                UC PUBG
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Пополни свой баланс UC и получи доступ ко всем премиум возможностям игры
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 transition-all hover:scale-105">
                <Icon name="ShoppingCart" size={24} className="mr-2" />
                Купить UC
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 hover:bg-secondary/10 transition-all hover:scale-105">
                <Icon name="Info" size={24} className="mr-2" />
                Подробнее
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={40} className="text-primary" />
        </div>
      </div>

      <section className="py-24 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Наши преимущества
            </h2>
            <p className="text-xl text-muted-foreground">
              Почему стоит выбрать нас для пополнения UC
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className="border-2 hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 animate-scale-in group bg-card/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={benefit.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Пакеты донатов
            </h2>
            <p className="text-xl text-muted-foreground">
              Выбери подходящий пакет и получи бонусные UC
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {donatPackages.map((pkg, index) => (
              <Card 
                key={pkg.id}
                className={`relative border-2 transition-all duration-300 hover:scale-105 animate-scale-in group ${
                  pkg.popular 
                    ? 'border-primary shadow-lg shadow-primary/30 bg-gradient-to-b from-primary/10 to-card' 
                    : 'border-border hover:border-secondary bg-card/80 backdrop-blur-sm'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-accent to-primary text-white px-4 py-1">
                      <Icon name="Star" size={16} className="mr-1 inline" />
                      Популярный
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform">
                    <Icon name="Coins" size={40} className="text-white" />
                  </div>
                  <CardTitle className="text-3xl font-bold">{pkg.amount} UC</CardTitle>
                  {pkg.bonus > 0 && (
                    <Badge variant="secondary" className="mt-2">
                      <Icon name="Plus" size={14} className="mr-1" />
                      {pkg.bonus} UC бонус
                    </Badge>
                  )}
                </CardHeader>
                
                <CardContent className="text-center pb-4">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {pkg.price} ₽
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {(pkg.price / pkg.amount).toFixed(2)} ₽ за UC
                  </p>
                </CardContent>
                
                <CardFooter>
                  <Button 
                    className={`w-full transition-all ${
                      pkg.popular 
                        ? 'bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50' 
                        : 'bg-secondary hover:bg-secondary/90'
                    }`}
                    size="lg"
                  >
                    <Icon name="ShoppingBag" size={20} className="mr-2" />
                    Купить
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-card/50 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Trophy" size={32} className="text-primary" />
            <span className="text-2xl font-bold">PUBG Донат</span>
          </div>
          <p className="text-muted-foreground mb-4">
            Официальный сервис пополнения UC для PUBG Mobile
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all">
              <Icon name="MessageCircle" size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all">
              <Icon name="Mail" size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all">
              <Icon name="Phone" size={24} />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            © 2025 PUBG Донат. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;