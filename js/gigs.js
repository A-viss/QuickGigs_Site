// to sroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// notification toggle according to rubric
document.addEventListener("DOMContentLoaded", () => {
    const notifBtn = document.getElementById("notif");
    const notifBar = document.getElementById("notif-bar");

    if (notifBtn && notifBar) {
        notifBtn.addEventListener("click", (e) => {
            e.preventDefault();
            notifBar.classList.toggle("active");
        });

        document.addEventListener("click", (e) => {
            if (!notifBtn.contains(e.target) && !notifBar.contains(e.target)) {
                notifBar.classList.remove("active");
            }
        });
    }

    // filer search with arrays according to rubric

    // every gigs are store in a js object and all objects are store in a arrey
    const gigsArray = [
        {
            id: 'b1',
            title: 'Custom E-commerce Website Development',
            deadline: 'August 15, 2025',
            description: 'Looking for a skilled developer to build a fully responsive e-commerce website with payment gateway integration, product catalog, shopping cart functionality, and admin dashboard. The site should be mobile-optimized with clean, modern design and fast loading times. Experience with PHP, MySQL, and JavaScript required. Will include basic SEO optimization, contact forms, and social media integration. Perfect for small to medium businesses ready to establish their online presence.',
            owner: 'Sarah Mitchell',
            contact: 'sarah.mitchell.dev@email.com',
            price: 1200, 
            deadlineDate: new Date('2025-08-15'), // convert dedline to date for filter
            element: null 
        },
        {
            id: 'b2',
            title: 'Customer Database Management',
            deadline: 'August 5, 2025',
            description: 'Need assistance organizing and inputting customer information from various sources into a centralized Excel database. Task involves data verification, duplicate removal, formatting standardization, and quality checks. Approximately 2,000 customer records need processing including names, addresses, phone numbers, and purchase history. Attention to detail is crucial as this data will be used for marketing campaigns. Experience with Excel formulas and data validation preferred.',
            owner: 'Marcus Rodriguez',
            contact: 'mrodriguez.business@email.com',
            price: 180,
            deadlineDate: new Date('2025-08-05'),
            element: null
        },
        {
            id: 'b3',
            title: 'Brand Identity Package Creation',
            deadline: 'August 20, 2025',
            description: 'Seeking creative graphic designer to develop complete brand identity for new tech startup. Package includes logo design (3 concepts), business card layouts, letterhead template, social media profile graphics, and brand guidelines document. Style should be modern, professional, and tech-forward. Designer must provide vector files and multiple format options. Experience with Adobe Creative Suite essential. Looking for someone who can capture our innovative spirit through visual design.',
            owner: 'Jennifer Chen',
            contact: 'j.chen.startup@email.com',
            price: 450,
            deadlineDate: new Date('2025-08-20'),
            element: null
        },
        {
            id: 'b4',
            title: 'Market Analysis for Renewable Energy Sector',
            deadline: 'August 12, 2025',
            description: 'Comprehensive market research needed on renewable energy trends, competitor analysis, and consumer behavior patterns in North American markets. Research should include industry growth projections, key players assessment, pricing strategies, and emerging technologies. Deliverable will be detailed 25-page report with charts, graphs, and actionable insights. Strong analytical skills and experience with market research methodologies required. Access to industry databases would be advantageous for this project.',
            owner: 'David Thompson',
            contact: 'd.thompson.consulting@email.com',
            price: 380,
            deadlineDate: new Date('2025-08-12'),
            element: null
        },
        {
            id: 'b5',
            title: 'YouTube Channel Content Creation',
            deadline: 'August 8, 2025',
            description: 'Professional video editor needed for ongoing YouTube content creation. Project involves editing 4 educational videos (10-15 minutes each) with engaging transitions, text overlays, background music, and thumbnail creation. Raw footage and brand assets will be provided. Editor should have experience with modern editing software, understanding of YouTube optimization, and ability to create compelling content that maintains viewer engagement throughout. Quick turnaround capability essential.',
            owner: 'Alex Rivera',
            contact: 'a.rivera.content@email.com',
            price: 320,
            deadlineDate: new Date('2025-08-08'),
            element: null
        }
    ];

    // store gigs elements
    const gigElements = document.querySelectorAll('.gig');
    gigsArray.forEach((gig, index) => {
        if (gigElements[index]) {
            gig.element = gigElements[index];
        }
    });

    // render gigs to order
    function renderGigs(sortedGigs) {

        
        const container = gigElements[0]?.parentNode;
        if (!container) {
            console.error('Could not find container');
            return;
        }

        // Store all elements
        const allChildren = Array.from(container.children);
        const nonGigElements = allChildren.filter(child => !child.classList.contains('gig'));
        
        // Clear the container
        container.innerHTML = '';
        
    
        const scrollBtn = document.getElementById('scrollBtn');
        nonGigElements.forEach(element => {
            if (element !== scrollBtn) {
                container.appendChild(element);
            }
        });
        
        // Add sorted gigs
        sortedGigs.forEach(gigData => {
            if (gigData.element) {
                container.appendChild(gigData.element);
            }
        });
        
        // Add scroll button at the end
        if (scrollBtn) {
            container.appendChild(scrollBtn);
        }
    }

    //function create to filter
    function sortByHighPrice() {
        const sorted = [...gigsArray].sort((a, b) => b.price - a.price); // seletect the highest price 
        renderGigs(sorted);
    }

    function sortByLowPrice() {
        const sorted = [...gigsArray].sort((a, b) => a.price - b.price); // select the lowest price
        renderGigs(sorted);
    }

    function sortByFarDeadline() {
        const sorted = [...gigsArray].sort((a, b) => b.deadlineDate - a.deadlineDate); // select the long dedline
        renderGigs(sorted);
    }

    function sortByNearDeadline() {
        const sorted = [...gigsArray].sort((a, b) => a.deadlineDate - b.deadlineDate); // select the short dedline
        renderGigs(sorted);
    }

    // event for filter buttons
    const filterButtons = document.querySelectorAll('.filter');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // remove clicked css from element
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.style.fontWeight = 'normal';
                btn.style.color = '';
            });
            
            // Add css to new clicked element
            button.classList.add('active');
            button.style.fontWeight = '700';
            button.style.color = '#001233';
            
            // js switch to apply filter according to filter type
            const filterText = button.textContent.trim();
            
            switch(filterText) {
                case 'High Price':
                    sortByHighPrice();
                    break;
                case 'Low Price':
                    sortByLowPrice();
                    break;
                case 'Far Deadling': 
                    sortByFarDeadline();
                    break;
                case 'Near Deadline':
                    sortByNearDeadline();
                    break;
                default:
                    console.log('Unknown filter:', filterText);
            }
        });
    });

    // pick gig function
    gigElements.forEach(gig => {
        const pickLink = gig.querySelector('a');
        if (pickLink) {
            pickLink.addEventListener('click', (e) => {
                e.preventDefault();

                const title = gig.querySelector('h2')?.innerText || '';
                const deadline = gig.querySelector('.date')?.innerText || '';
                const price = gig.querySelector('h1')?.innerText || '';

                // get from local storage
                const pickedGigs = JSON.parse(localStorage.getItem('pickedGigs') || '[]');
                
                //add the gig to array
                pickedGigs.push({ title, deadline, price });
                
                // save to local storage
                localStorage.setItem('pickedGigs', JSON.stringify(pickedGigs));

                // navigate to task page 
                window.location.href = 'tasks.html';
            });
        }
    });

    
    const scrollBtn = document.getElementById('scrollBtn');
    if (scrollBtn) {
        scrollBtn.style.display = 'block'; // always scroll button show
    }
});