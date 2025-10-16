// Dados da timeline baseados na imagem fornecida
const timelineData = [
    {
        date: '10/02/2025',
        description: 'Reunião mensal de resultados com falhas no microfone.',
        type: 'meeting',
        highlight: true,
        icon: 'fas fa-exclamation-triangle',
        status: 'warning'
    },
    {
        date: '20/02/2025',
        description: 'Atualizado firmware, ressincronizado microfones.',
        type: 'solution',
        highlight: false,
        icon: 'fas fa-cog',
        status: 'info'
    },
    {
        date: '10/03/2025',
        description: 'Evento com falhas no microfone.',
        type: 'meeting',
        highlight: true,
        icon: 'fas fa-exclamation-triangle',
        status: 'warning'
    },
    {
        date: '11/03/2025',
        description: 'Reunião mensal de resultados com falhas no microfone.',
        type: 'meeting',
        highlight: true,
        icon: 'fas fa-exclamation-triangle',
        status: 'warning'
    },
    {
        date: '12/03/2025',
        description: 'Evento diretoria com falhas no microfone.',
        type: 'meeting',
        highlight: true,
        icon: 'fas fa-exclamation-triangle',
        status: 'warning'
    },
    {
        date: '01/04/2025',
        description: 'Visita técnica Maxwell realizado testes e configurações na programação de áudio.',
        type: 'technical',
        highlight: false,
        icon: 'fas fa-tools',
        status: 'info'
    },
    {
        date: '04/04/2025',
        description: 'Verificado potências das antenas de recepção dos microfones.',
        type: 'solution',
        highlight: false,
        icon: 'fas fa-wifi',
        status: 'info'
    },
    {
        date: '08/04/2025',
        description: 'Visita técnica Maxwell para acompanhar evento e verificar se ações foram positivas.',
        type: 'technical',
        highlight: false,
        icon: 'fas fa-tools',
        status: 'info'
    },
    {
        date: '08/04/2025',
        description: 'Reunião mensal de resultados sem ocorrências.',
        type: 'meeting',
        highlight: true,
        icon: 'fas fa-check-circle',
        status: 'success'
    },
    {
        date: '15/04/2025',
        description: 'Falhas nos microfones.',
        type: 'issue',
        highlight: false,
        icon: 'fas fa-exclamation-triangle',
        status: 'warning'
    },
    {
        date: '16/04/2025',
        description: 'Falhas nos microfones.',
        type: 'issue',
        highlight: false,
        icon: 'fas fa-exclamation-triangle',
        status: 'warning'
    },
    {
        date: '16/04/2025',
        description: 'Fechado agenda do ambiente e realizado testes.',
        type: 'solution',
        highlight: false,
        icon: 'fas fa-calendar-check',
        status: 'info'
    },
    {
        date: '25/04/2025',
        description: 'Pela primeira vez presenciamos a falha em testes.',
        type: 'issue',
        highlight: false,
        icon: 'fas fa-exclamation-triangle',
        status: 'warning'
    },
    {
        date: '09/05/2025',
        description: 'Realizado teste com fonte de áudio continua nos microfones.',
        type: 'solution',
        highlight: false,
        icon: 'fas fa-volume-up',
        status: 'info'
    },
    {
        date: '09/05/2025',
        description: 'Identificamos uma configuração que corta o áudio se o ruído ultrapassa valor configurado.',
        type: 'solution',
        highlight: true,
        icon: 'fas fa-sliders-h',
        status: 'turnpoint',
        isTurnPoint: true
    },
    {
        date: '13/05/2025',
        description: 'Reunião mensal de resultados  sem ocorrências.',
        type: 'meeting',
        highlight: true,
        icon: 'fas fa-check-circle',
        status: 'success'
    },
    {
        date: '13/05/2025',
        description: 'Reunião mensal de LAR sem ocorrências.',
        type: 'meeting',
        highlight: true,
        icon: 'fas fa-check-circle',
        status: 'success'
    },
    {
        date: '15/05/2025',
        description: 'Realizado teste com fonte de áudio continua nos microfones.',
        type: 'solution',
        highlight: false,
        icon: 'fas fa-volume-up',
        status: 'info'
    },
    {
        date: '23/05/2025',
        description: 'Instalado receptor e microfone enviado para testes.',
        type: 'solution',
        highlight: false,
        icon: 'fas fa-microphone',
        status: 'info'
    },
    {
        date: '28/05/2025',
        description: 'Evento Diretoria sem ocorrências.',
        type: 'meeting',
        highlight: true,
        icon: 'fas fa-check-circle',
        status: 'success'
    },
    {
        date: '11/06/2025',
        description: 'Reunião mensal de resultados pequenas falhas.',
        type: 'meeting',
        highlight: true,
        icon: 'fas fa-exclamation-triangle',
        status: 'warning'
    },
    {
        date: '11/06/2025',
        description: 'Reunião mensal de resultados LAR sem ocorrências.',
        type: 'meeting',
        highlight: true,
        icon: 'fas fa-check-circle',
        status: 'success'
    },
    {
        date: '11/06/2025',
        description: 'Evento Marketing sem ocorrências.',
        type: 'meeting',
        highlight: true,
        icon: 'fas fa-check-circle',
        status: 'success'
    },
    {
        date: '16/06/2025',
        description: 'Evento com falhas no microfone.',
        type: 'meeting',
        highlight: true,
        icon: 'fas fa-exclamation-triangle',
        status: 'warning'
    },
    {
        date: '16/06/2025',
        description: 'Identificado faixas de frequências via Wireless Workbench e sincronizado microfone em zonas limpas.',
        type: 'solution',
        highlight: true,
        icon: 'fas fa-signal',
        status: 'turnpoint',
        isTurnPoint: true
    },
    {
        date: '24/06/2025',
        description: 'Evento sem ocorrências.',
        type: 'meeting',
        highlight: true,
        icon: 'fas fa-check-circle',
        status: 'success'
    },
    {
        date: '26/06/2025',
        description: 'Evento IA Gemini sem ocorrências.',
        type: 'meeting',
        highlight: true,
        icon: 'fas fa-check-circle',
        status: 'success'
    },
    {
        date: '15/07/2025',
        description: 'Reunião mensal de resultados sem ocorrências.',
        type: 'meeting',
        highlight: true,
        icon: 'fas fa-check-circle',
        status: 'success'
    },
    {
        date: '07/08/2025',
        description: 'Evento sem ocorrências.',
        type: 'meeting',
        highlight: true,
        icon: 'fas fa-check-circle',
        status: 'success'
    },
    {
        date: '12/08/2025',
        description: 'Reunião mensal de resultados sem ocorrências.',
        type: 'meeting',
        highlight: true,
        icon: 'fas fa-check-circle',
        status: 'success'
    },
    {
        date: '12/08/2025',
        description: 'Reunião mensal de LAR sem ocorrências.',
        type: 'meeting',
        highlight: true,
        icon: 'fas fa-check-circle',
        status: 'success'
    }
    ,
    {
        date: '09/09/2025',
        description: 'Reunião mensal de resultados sem ocorrências.',
        type: 'meeting',
        highlight: true,
        icon: 'fas fa-check-circle',
        status: 'success'
    },
    {
        date: '11/09/2025',
        description: 'Reunião mensal de LAR sem ocorrências.',
        type: 'meeting',
        highlight: true,
        icon: 'fas fa-check-circle',
        status: 'success'
    },
    {
        date: '16/09/2025',
        description: 'Reunião Diretoria Simone sem ocorrências.',
        type: 'meeting',
        highlight: true,
        icon: 'fas fa-check-circle',
        status: 'success'
    },
    {
        date: '17/09/2025',
        description: 'Reunião Equipe Segurança sem ocorrências.',
        type: 'meeting',
        highlight: true,
        icon: 'fas fa-check-circle',
        status: 'success'
    },
    {
        date: '23/09/2025',
        description: 'Reunião WH talks sem ocorrências.',
        type: 'meeting',
        highlight: true,
        icon: 'fas fa-check-circle',
        status: 'success'
    },
    {
        date: '14/10/2025',
        description: 'Reunião mensal de resultados com falhas (conflito de IP).',
        type: 'meeting',
        highlight: true,
        icon: 'fas fa-exclamation-triangle',
        status: 'warning'
    },
    {
        date: '14/10/2025',
        description: 'Reunião sem ocorrências.',
        type: 'meeting',
        highlight: true,
        icon: 'fas fa-check-circle',
        status: 'success'
    },
    {
        date: '16/10/2025',
        description: 'Reunião HR sem ocorrências.',
        type: 'meeting',
        highlight: true,
        icon: 'fas fa-check-circle',
        status: 'success'
    },
    {
        date: '16/10/2025',
        description: 'Reunião LEGAL sem ocorrências.',
        type: 'meeting',
        highlight: true,
        icon: 'fas fa-check-circle',
        status: 'success'
    }
];

class TimelineManager {
    constructor() {
        this.timelineContainer = document.querySelector('.timeline');
        this.summaryContainer = document.querySelector('.summary-grid');
        this.groupedData = this.groupEventsByDate(timelineData);

        this.init();
    }

    groupEventsByDate(data) {
        const grouped = {};

        data.forEach(item => {
            if (!grouped[item.date]) {
                grouped[item.date] = [];
            }
            grouped[item.date].push(item);
        });

        return grouped;
    }

    init() {
        this.renderSummary();
        this.renderTimeline();
        this.showAll(); // Show all items
    }

    renderSummary() {
        this.summaryContainer.innerHTML = '';
        
        // Get the last 10 events for summary
        const sortedEvents = timelineData.sort((a, b) => {
            const dateA = new Date(a.date.split('/').reverse().join('-'));
            const dateB = new Date(b.date.split('/').reverse().join('-'));
            return dateA - dateB; // Oldest first
        }).slice(-10); // Get last 10 from sorted array

        sortedEvents.forEach((event, index) => {
            const summaryItem = document.createElement('div');
            summaryItem.className = `summary-item ${event.status}`;
            summaryItem.setAttribute('data-date', event.date);
            summaryItem.setAttribute('data-event-index', index);
            
            // Use normal icon size for turnpoint, not the large one
            const iconClass = event.status === 'turnpoint' ? 'fas fa-sliders-h' : event.icon;
            summaryItem.innerHTML = `<i class="${iconClass}"></i>`;
            
            // Add click event to scroll to timeline item
            summaryItem.addEventListener('click', () => {
                this.scrollToTimelineItem(event.date);
            });
            
            this.summaryContainer.appendChild(summaryItem);
        });
    }

    renderTimeline() {
        this.timelineContainer.innerHTML = '';

        const sortedDates = Object.keys(this.groupedData).sort((a, b) => {
            const dateA = new Date(a.split('/').reverse().join('-'));
            const dateB = new Date(b.split('/').reverse().join('-'));
            return dateA - dateB;
        });

        sortedDates.forEach((date, index) => {
            const events = this.groupedData[date];
            const timelineItem = this.createTimelineItem(date, events, index);
            this.timelineContainer.appendChild(timelineItem);
        });
    }

    createTimelineItem(date, events, index) {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.dataset.index = index;

        // Determine the main status for the card based on events
        const hasWarning = events.some(event => event.status === 'warning');
        const hasSuccess = events.some(event => event.status === 'success');
        const mainStatus = hasWarning ? 'warning' : (hasSuccess ? 'success' : 'info');



        // Create events list
        const eventsList = events.map(event => {
            const eventIconClass = `timeline-icon ${event.status}`;
            return `
                <div class="timeline-event ${event.status}-bg">
                    <i class="${event.icon} ${eventIconClass}"></i>
                    <span>${event.description}</span>
                </div>
            `;
        }).join('');

        timelineItem.innerHTML = `
            <div class="timeline-content status-${mainStatus}">
                <div class="timeline-date">
                    ${date}
                </div>
                <div class="timeline-events">
                    ${eventsList}
                </div>
            </div>
            <div class="timeline-marker ${mainStatus}"></div>
        `;

        return timelineItem;
    }



    // Method to show all items
    showAll() {
        const items = document.querySelectorAll('.timeline-item');
        items.forEach((item, index) => {
            item.style.display = 'flex';
            item.classList.remove('active'); // Reset active state
            setTimeout(() => {
                item.classList.add('active');
            }, index * 150);
        });
    }

    // Method to scroll to specific timeline item by date
    scrollToTimelineItem(date) {
        const timelineItems = document.querySelectorAll('.timeline-item');
        let targetItem = null;
        
        // Find the timeline item with matching date
        timelineItems.forEach(item => {
            const timelineDate = item.querySelector('.timeline-date');
            if (timelineDate && timelineDate.textContent.trim() === date) {
                targetItem = item;
            }
        });
        
        if (targetItem) {
            // Scroll to the timeline item with smooth behavior
            targetItem.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
            
            // Add highlight effect with multiple stages
            targetItem.classList.add('highlighted');
            
            // Remove highlight after animation
            setTimeout(() => {
                targetItem.classList.remove('highlighted');
            }, 3000);
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const timeline = new TimelineManager();

    // Add some interactive features
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach(item => {
        item.addEventListener('click', () => {
            // Add click effect
            item.style.transform = 'scale(0.95)';
            setTimeout(() => {
                item.style.transform = '';
            }, 150);
        });
    });
});

