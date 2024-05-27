import './FAQ.scss';
import { FAQ_ITEMS } from '../../util/data';
import { useState } from 'react';

function Accordion({ faqTitle, faqContent, isOpen, toggleAccordion }) {
  return (
    <div className={`faq-accordion-item ${isOpen ? 'open' : ''}`}>
      <div className='faq-accordion-header' onClick={toggleAccordion}>
        { faqTitle }
      </div>
      <div className='faq-accordion-content'>
        { faqContent }
      </div>
    </div>
  );
}

function FAQ() {
  const [openItem, setOpenItem] = useState(FAQ_ITEMS[0].id);
  const toggleAccordion = (itemId) => {
    setOpenItem(itemId === openItem ? null : itemId);
  };

  return(
    <section className='faq-component-wrapper'>
      <div className='container'>
        <div className='faq-content-wrapper'>
          <span className='content-label'>FAQ</span>
          <h3>Get Every General Answers From Here</h3>
          <div className='faq-accordion-wrapper'>
            {FAQ_ITEMS.map((faqItem) =>(
              <Accordion key={faqItem.id} isOpen={faqItem.id === openItem} toggleAccordion={() => toggleAccordion(faqItem.id)} {...faqItem}></Accordion>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;