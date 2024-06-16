import React from 'react'
import '../Pages/CSS/service.css'
import service_img from '../Component/assest/pngwing.com.png'
const Service = () => {
  return (
    <>
    <div className='service-banner'>
      <div className="service-banner1">
   <h1>Web Design Service</h1>
            <button>Get My Free Proposal</button>
            </div>
  
    </div>
    <div className='service-content'>
    <p>The internet is a goldmine of opportunities for all kinds of businesses worldwide. Leverage its power to your advantage. Establish your digital presence today and discover your market potential with Thrive Internet Marketing Agency’s website design services. From website design and development to search engine optimization (SEO) and site maintenance, we’ve got you covered!
      <h1>Superior Web Design Represents Your Company and Grows
      Your Business</h1>
    </p>
    </div>
    <div className='service-row'>
      <div className="service-row1">
    <p>Creating a digital presence doesn’t mean simply building
                        a website and waiting for customers to approach your
                        brand. Your website is your company’s online foundation.
                        It serves as your primary customer touchpoint and
                        conversion machine. As such, you must ensure it ranks
                        high in search engines, stands out from the competition
                        and relates to your visitors’ intentions.</p>
                    <p>Statistics reveal that website design and navigation
                        influence 94 percent of first impressions. Search
                        engines also favor websites with responsive web design
                        and well-structured web content. What’s more, 75 percent
                        of site credibility comes from web page design.</p>
                    <p>As a business owner, it is critical that you maintain a
                        responsive website design to appeal to search engines
                        and online users. You must ensure your target customers
                        see a legit business platform when they search for your
                        company online. Otherwise, you risk losing trust from
                        your prospective clients and dissuade them from engaging
                        with your brand.</p>
                    <p>Invest in responsive website design and build trust and
                        confidence in your brand offerings. Our web design
                        company provides SEO-friendly website design services
                        that aim to boost your search rankings, increase your
                        online exposure and convert page visitors into paying
                        customers.</p>
                        </div>
                        <img src={service_img}alt=''/>

    </div>
    <div className='service'>
    <div className='service-header'>
      <h1>Service provided</h1>
      </div>
      <div className='service-box'>
        <div className='service-box1'>
          <div className='service-box-img'>
        <img src='https://bizforcetech.com/wp-content/uploads/2022/05/choosing_managed_it_services_provider.png' alt=''/>
        </div>
        <h5>AI ARTIFICAL INTELEGENT</h5>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita magni dignissimos mollitia optio quibusdam repudiandae odit consequuntur labore.</p>
        </div>
        <div className='service-box1'>
        <div className='service-box-img'>
        <img src='https://codup.co/wp-content/uploads/2021/08/full-stack-development.png' alt=''/>
       </div>
        <h5>FULL STACK DEVELOPER</h5>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita magni dignissimos mollitia optio quibusdam repudiandae odit consequuntur labore.</p>
        </div>
        <div className='service-box1'>
        <div className='service-box-img'>
        <img src='https://www.allbusiness.com/media-library/machine-learning.jpg?id=32093222&' alt=''/>
        </div>
        <h5>MACHINE LEARNING</h5>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita magni dignissimos mollitia optio quibusdam repudiandae odit consequuntur labore.</p>
        </div>
        <div className='service-box1'>
        <div className='service-box-img'>
        <img src='https://www.agroinfomart.com/images/og-subcategory1/service-provider.jpg' alt=''/>
       </div>
        <h5>WEBSITE DEVELOPER</h5>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita magni dignissimos mollitia optio quibusdam repudiandae odit consequuntur labore.</p>
        </div>
        
    </div>
   </div>
   </>
  )
}

export default Service
