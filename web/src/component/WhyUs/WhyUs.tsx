import './WhyUsStyles.css'
import photo from '../../assets/11.jpg' 

export const WhyUs = () => {

    return(
        <div className='why-container'>
            <div className='why-text'>
                <div>
                <h2>
                    Dlaczego akurat my?
                </h2>
                <p>Posiadamy szeroką wiedzę i doświadczenie w branży turystycznej</p>
                </div>
                <div className='why-smaller'>
                    <div>
                        <h3>Bezpieczeństwo i wsparcie</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id lacus in massa sodales tincidunt in quis leo. Nulla blandit malesuada interdum. Aliquam in scelerisque justo. Donec elit augue, malesuada a porttitor et, laoreet elementum quam.</p>
                    </div>
                    <div>
                        <h3>Zróżnicowany zakres miejsc docelowych</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id lacus in massa sodales tincidunt in quis leo. Nulla blandit malesuada interdum. Aliquam in scelerisque justo.</p>
                    </div>
                    <div>
                        <h3>24/7 Wsparcie klienta</h3>
                        <p> Donec elit augue, malesuada a porttitor et, laoreet elementum quam.</p>
                    </div>
                </div>
            </div>
            <div className='why-img'>
                <img src={photo}/>
            </div>
        </div>
    );
}

export default WhyUs;