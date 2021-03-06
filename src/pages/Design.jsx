import React, {useState, useEffect} from 'react'
import Aos from 'aos';
import { DotLoader } from "react-spinners";
import { Link } from 'react-router-dom'

const Design = () => {
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      setInterval(() => {
        setIsLoading(false);
      }, 500);

      Aos.init({
        once: false,
        duration: 2000,
      })

    }, []);
    return (
        <>
        {isLoading ? (
          <div className="loader ">
              <h5 className='mr-4'>Дизайн</h5>
            <DotLoader color="#fff" size="35" loading={isLoading} />
          </div>
        ) : (
          ""
        )}
        <div className='design courses'> 
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Дизайн</h1>
                        <p>Разработка брендбуков, Веб-дизайн, СММ-дизайн</p>
                        <button className="btn myBtn">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
        
        
      <div className='webHeader myWebHeader'>
        <div className="container">
          <div className="row align-items-center">
            <div data-aos='fade-right' className="col-lg-6">
              <h1>Общее понятие о Дизайне</h1>
              <p>Дизайн (от англ. Design – проектировать; чертить; задумать; а также проект; план; рисунок. С помощью дизайна   создается определенный и запоминающийся креатив, связанный с представительством компании в сети Интернет и ее повседневной деятельностью. Необычный и яркий дизайн сайта позволяет выделить его среди других ресурсов и, тем самым, привлечь на его страницы большее количество пользователей.</p>
            </div>
            <div data-aos='fade-left' className="col-lg-6">
              <i><img src="/assets/image/web.png" alt="" /></i>
            </div>
          </div>
        </div>
      </div>

      <div className="webConsist myWebConsist">
        <div className="container">
          <div className="row align-items-center">
            <div data-aos='fade-right' className="col-lg-5">
              <i><img src="/assets/image/card3.png" alt="" className="w-100" /></i>
            </div>
            <div data-aos='fade-left' className="col-lg-6 ml-auto">
              <h1>Общее понятие о Дизайне</h1>
              <p>Веб дизайн</p>
              <p>Смм дизайн</p>
              <p>Разработка брендбуков</p>
            </div>
          </div>

          <div className="row align-items-center mt-4">
            <div data-aos='fade-right' className="col-lg-6">
              <h1>Веб дизайн</h1>
              <h6>Веб-дизайн (от англ. Web design)  - это направление веб разработки и разные виды дизайна.  Основной целью веб-дизайна является проектирование пользовательских  веб-интерфейсов для сайтов или веб-приложений.</h6>
              <p>Дизайн основной и типовых страниц сайта</p>
            </div>
            <div data-aos='fade-left' className="col-lg-5 ml-auto">
              <i><img src="/assets/image/card3.png" alt="" /></i>
            </div>
          </div>

          <div className="row align-items-center mt-4 ">
            <div data-aos='fade-right' className="col-lg-5">
              <i><img src="/assets/image/card3.png" alt="" className="w-100" /></i>
            </div>
            <div data-aos='fade-left' className="col-lg-6 ml-auto">
              <h1>Смм дизайн</h1>
              <h5>СММ дизайн – это дизайн социальных сетей, который помогает сделать группу или страницу привлекательной  для пользователей.</h5>
              <h5>СММ дизайн включает в себя: </h5>
              <p>разработку логотипа;</p>
              <p>создание баннера, макета;</p>
              <p>адаптивную верстку;</p>
              <p>подготовку фирменного стиля;</p>
              <p>создание цепляющего аватара;</p>
              <p>оформление постов в едином стиле;</p>
              <p>создание водяного знака;</p>
              <p>создание мини-сайта (либо его оформление).</p>
            </div>
          </div>

          <div className="row align-items-center mt-4 myRow">
            <div data-aos='fade-right' className="col-lg-6 ml-auto">
              <h1>Разработка брендбуков</h1>
              <h5>Разработка брендбука (brand book) – это совмещение работ по формированию основного документа, который состоит из важнейших информаций о бренде, правил использования, рекомендации и графического стиля.</h5>
              <p>Стратегия позиционирования бренда</p>
              <p>Логотип и фирменный стиль бренда</p>
              <p>Фотостиль</p>
              <p>Деловая документация</p>
              <p>Коммуникационные материалы бренда</p>
              <p>Дизайн упаковки бренда (при наличии)</p>
            </div>
            <div data-aos='fade-left' className="col-lg-5">
              <i><img src="/assets/image/card3.png" alt="" className="w-100" /></i>
            </div>
          </div>

        </div>
      </div>

      <div className="webWhyWe myWebWhyWe">
        <div className="container">
          <div className="row">
            <div data-aos='fade-up' className="col-12 text-center">
              <h2>Почему Мы:</h2>
            </div>
          </div>
          <div className="row align-items-center mb-5">
            <div data-aos='fade-right' className="col-lg-6">
              <h1>Поисковое продвижение</h1>
              <p> Комплексная услуга, включающая в себя SEO оптимизацию сайта, аналитику и контент-маркетинг. Выведем ваш сайт в Топ-5 в поисковых системах Яндекс и Google по запросам, которые актуальны для вашего бизнеса.</p>
            </div>
            <div data-aos='fade-left' className="col-lg-6">
              <i><img src="/assets/image/card2.png" alt="" className="rounded" /></i>
            </div>
          </div>

          <div className="row align-items-center mb-5">
            <div data-aos='fade-right' className="col-lg-6">
              <i><img src="/assets/image/card2.png" alt="" className="rounded" /></i>
            </div>
            <div data-aos='fade-left' className="col-lg-6">
              <h1>Контекстная реклама</h1>
              <p>
                Создание и сопровождение эффективной контекстной рекламы в Яндексе и Google. Наши рекламные решения - это не действия наудачу, а точное попадание в цель.</p>
            </div>
          </div>

          <div className="row align-items-center mb-5">
            <div data-aos='fade-right' className="col-lg-6">
              <h1>Социальные сети </h1>
              <p>
                Реклама в соц. сетях позволит охватить около 70% населения нашей страны и многократно повысить узнаваемость вашего бренда, продуктов и услуг.</p>
            </div>
            <div data-aos='fade-left' className="col-lg-6">
              <i><img src="/assets/image/card1.png" alt="" className="rounded" /></i>
            </div>
          </div>

        </div>
      </div>

      <div className="webSupport myWebSupport">
        <div className="container">
          <div className="row align-items-center">
            <div data-aos='fade-up' className="col-2">
              <i><img src="/assets/image/contactBg.svg" alt="" /></i>
            </div>
            <div data-aos='fade-up' className="col-10">
              <h1>Нужна команда для поддержки вашего сервиса?</h1>
              <p>Коротко опишите свои задачи и узнайте, как и чем мы можем помочь в развитии вашего бизнеса</p>
              <a className='btn myBtn' href="tel: +998943698058">Call Us</a>
            </div>
          </div>
        </div>
      </div>

      <div className="myWebDepends">
        <div className="container">
          <div className="row">
            <div data-aos='fade-up' className="col-12 text-center">
              <h1>Вам также подходят</h1>
            </div>
            <div data-aos='fade-up' className="col-lg-5 offset-lg-1">
              <Link to='/web-development'>
                <div className="card">
                  <div className="card-body">
                    <i><img src="/assets/image/card2.png" alt="" className="w-100" /></i>
                    <h5>Веб услуги</h5>
                    <p>Разработка сайтов, ботов, интернет-магазинов</p>
                  </div>
                </div>
              </Link>
            </div>

            <div data-aos='fade-up' className="col-lg-5">
              <Link to='/motion'>
                <div className="card">
                  <div className="card-body">
                    <i><img src="/assets/image/card4.png" alt="" className="w-100" /></i>
                    <h5>Моушн</h5>
                    <p>Создание моушн видео, создание анимационных видео роликов</p>
                  </div>
                </div>
              </Link>
            </div>

          </div>
        </div>
      </div>

        </>
    )
}

export default Design
