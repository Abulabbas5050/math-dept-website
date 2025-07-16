document.addEventListener('DOMContentLoaded', function() {

    // --- JavaScript for Courses Page (courses.html) ---
    const coursesLevelFilter = document.getElementById('level-filter');
    const coursesSemesterFilter = document.getElementById('semester-filter');
    const coursesSearchBar = document.getElementById('course-search-bar');
    const courseLevelSections = document.querySelectorAll('.course-level-section');
    const allCourseCards = document.querySelectorAll('.course-card');

    if (coursesLevelFilter && coursesSemesterFilter && coursesSearchBar && allCourseCards.length > 0) {
        function applyCourseFilters() {
            const selectedLevel = coursesLevelFilter.value;
            const selectedSemester = coursesSemesterFilter.value;
            const searchTerm = coursesSearchBar.value.toLowerCase();

            allCourseCards.forEach(card => {
                card.style.display = 'none';
            });

            allCourseCards.forEach(card => {
                const cardLevel = card.dataset.level;
                const cardSemester = card.dataset.semester;
                const cardCode = card.dataset.code.toLowerCase();
                const cardTitle = card.dataset.title.toLowerCase();
                const cardDescription = card.querySelector('.course-description').textContent.toLowerCase();

                const levelMatch = (selectedLevel === 'all' || cardLevel === selectedLevel);
                const semesterMatch = (selectedSemester === 'all' || cardSemester === selectedSemester);
                const searchMatch = (
                    searchTerm === '' ||
                    cardCode.includes(searchTerm) ||
                    cardTitle.includes(searchTerm) ||
                    cardDescription.includes(searchTerm)
                );

                if (levelMatch && semesterMatch && searchMatch) {
                    card.style.display = 'flex';
                }
            });

            courseLevelSections.forEach(levelSection => {
                let levelSectionHasVisibleCourses = false;
                levelSection.querySelectorAll('.semester-section').forEach(semesterSection => {
                    let semesterSectionHasVisibleCourses = true;
                    if (semesterSection.id === 'first-semester-courses' && selectedSemester === 'second') {
                         semesterSectionHasVisibleCourses = false;
                    }
                    if (semesterSection.id === 'second-semester-courses' && selectedSemester === 'first') {
                        semesterSectionHasVisibleCourses = false;
                    }

                    let anyCardVisibleInSemester = false;
                    semesterSection.querySelectorAll('.course-card').forEach(card => {
                        if (card.style.display !== 'none') {
                            anyCardVisibleInSemester = true;
                        }
                    });

                    if (semesterSectionHasVisibleCourses && anyCardVisibleInSemester) {
                        semesterSection.style.display = 'block';
                        levelSectionHasVisibleCourses = true;
                    } else {
                        semesterSection.style.display = 'none';
                    }
                });
                if (levelSectionHasVisibleCourses) {
                    levelSection.style.display = 'block';
                } else {
                    levelSection.style.display = 'none';
                }
            });
        }

        coursesLevelFilter.addEventListener('change', applyCourseFilters);
        coursesSemesterFilter.addEventListener('change', applyCourseFilters);
        coursesSearchBar.addEventListener('keyup', applyCourseFilters);
        applyCourseFilters();
    }


    // --- JavaScript for Past Questions Page (past-question.html) ---
    const pqLevelFilter = document.getElementById('pq-level-filter');
    const pqSemesterFilter = document.getElementById('pq-semester-filter');
    const pqSearchBar = document.getElementById('pq-search-bar');
    const pqLevelSections = document.querySelectorAll('.pq-level-section');
    const allPqCards = document.querySelectorAll('.pq-card');

    if (pqLevelFilter && pqSemesterFilter && pqSearchBar && allPqCards.length > 0) {
        function applyPqFilters() {
            const selectedLevel = pqLevelFilter.value;
            const selectedSemester = pqSemesterFilter.value;
            const searchTerm = pqSearchBar.value.toLowerCase();

            allPqCards.forEach(card => {
                card.style.display = 'none';
            });

            allPqCards.forEach(card => {
                const cardLevel = card.dataset.level;
                const cardSemester = card.dataset.semester;
                const cardCode = card.dataset.code.toLowerCase();
                const cardTitle = card.dataset.title.toLowerCase();
                const cardYear = card.dataset.year;
                const cardDescription = card.querySelector('.pq-description').textContent.toLowerCase();

                const levelMatch = (selectedLevel === 'all' || cardLevel === selectedLevel);
                const semesterMatch = (selectedSemester === 'all' || cardSemester === selectedSemester);
                const searchMatch = (
                    searchTerm === '' ||
                    cardCode.includes(searchTerm) ||
                    cardTitle.includes(searchTerm) ||
                    cardYear.includes(searchTerm) ||
                    cardDescription.includes(searchTerm)
                );

                if (levelMatch && semesterMatch && searchMatch) {
                    card.style.display = 'flex';
                }
            });

            pqLevelSections.forEach(levelSection => {
                let levelSectionHasVisiblePQs = false;
                levelSection.querySelectorAll('.semester-section').forEach(semesterSection => {
                    let semesterSectionHasVisiblePQs = true;
                     if (semesterSection.id === 'first-semester-past-questions' && selectedSemester === 'second') {
                         semesterSectionHasVisiblePQs = false;
                    }
                    if (semesterSection.id === 'second-semester-past-questions' && selectedSemester === 'first') {
                        semesterSectionHasVisiblePQs = false;
                    }

                    let anyCardVisibleInSemester = false;
                    semesterSection.querySelectorAll('.pq-card').forEach(card => {
                        if (card.style.display !== 'none') {
                            anyCardVisibleInSemester = true;
                        }
                    });

                    if (semesterSectionHasVisiblePQs && anyCardVisibleInSemester) {
                        semesterSection.style.display = 'block';
                        levelSectionHasVisiblePQs = true;
                    } else {
                        semesterSection.style.display = 'none';
                    }
                });
                if (levelSectionHasVisiblePQs) {
                    levelSection.style.display = 'block';
                } else {
                    levelSection.style.display = 'none';
                }
            });
        }

        pqLevelFilter.addEventListener('change', applyPqFilters);
        pqSemesterFilter.addEventListener('change', applyPqFilters);
        pqSearchBar.addEventListener('keyup', applyPqFilters);
        applyPqFilters();
    }


    // --- JavaScript for Home Page Global Search (index.html/ggg.html) ---
    const globalSearchBar = document.getElementById('global-search-bar');
    const searchSuggestionsDiv = document.getElementById('search-suggestions'); // This will now act as the results container

    if (globalSearchBar && searchSuggestionsDiv) {

        // Your new searchable items data
        const searchableItems = [
            { title: "MTH 101: Sets and Number System", type: "Course", link: "courses.html" },
            { title: "MTH 103: Trigonometry and Coordinate Geometry", type: "Course", link: "courses.html" },
            { title: "MTH 105: Differential and Integral Calculus", type: "Course", link: "courses.html" },
            { title: "MTH 102: Algebra", type: "Course", link: "courses.html" },
            { title: "MTH 104: Conic Sections and Applications of Calculus", type: "Course", link: "courses.html" },
            { title: "MTH 106: Vectors and Dynamics", type: "Course", link: "courses.html" },
            { title: "MTH 201: Mathematical Methods I", type: "Course", link: "courses.html" },
            { title: "MTH 202: Elementary Differential Equations", type: "Courses", link: "courses.html" },
            { title: "MTH 203: Real Analysis I", type: "Courses", link: "courses.html" },
            { title: "MTH 205: Abstract Algebra I", type: "Courses", link: "courses.html" },
            { title: "MTH 204: Real Analysis II", type: "Courses", link: "courses.html" },
            { title: "MTH 207: Linear Algebra I", type: "Courses", link: "courses.html" },
            { title: "MTH 206: Abstract Algebra II", type: "Courses", link: "courses.html" },
            { title: "MTH 208: Linear Algebra II", type: "Courses", link: "courses.html" },
            { title: "MTH 209: Numerical Analysis I", type: "Courses", link: "courses.html" },
            { title: "MTH 301: Mathematical Methods II", type: "Courses", link: "courses.html" },
            { title: "MTH 303: Advanced Real Analysis", type: "Courses", link: "courses.html" },
            { title: "MTH 305: Theory of Rings and Fields", type: "Courses", link: "courses.html" },
            { title: "MTH 307: Complex Analysis I", type: "Courses", link: "courses.html" },
            { title: "MTH 309: Analytical Dynamics I", type: "Courses", link: "courses.html" },
            { title: "MTH 311: Mathematical Modelling", type: "Courses", link: "courses.html" },
            { title: "MTH 317: Numerical Analysis II", type: "Courses", link: "courses.html" },
            { title: "MTH 300: SIWES", type: "Courses", link: "courses.html" },


            { title: "MTH 401: Differential Equations", type: "Courses", link: "courses.html" },
            { title: "MTH 402 - Functional Analysis", type: "courses", link: "courses.html" },
            { title: "MTH 403 - General Topology", type: "courses", link: "courses.html" },
            { title: "MTH 405 - Theory of Finite Groups", type: "courses", link: "courses.html" },
            { title: "MTH 407: Advanced Real Analysis II", type: "Courses", link: "courses.html" },
            { title: "MTH 413: Hydrodynamics I", type: "Courses", link: "courses.html" },
            { title: "MTH 425: Graph Theory and Combinatories", type: "Courses", link: "courses.html" },





            { title: "MTH 101 - Past Question 2022", type: "Past Question", link: "pdfs/mth101-2022.pdf" },
            { title: "MTH 202 - Past Question 2021", type: "Past Question", link: "pdfs/mth202-2021.pdf" },
            { title: "MTH 301 - Past Question 2020", type: "Past Question", link: "pdfs/mth301-2020.pdf" },
            { title: "MTH 401 - Past Question 2022", type: "Past Question", link: "pdfs/mth401-2022.pdf" },
            { title: "Abbas Onimisi Salihu", type: "Team", link: "team.html" },
            { title: "Dauda Raji", type: "Team", link: "team.html" },
            { title: "Adepoju Ibrahim", type: "Team", link: "team.html" },
            { title: "Rachel", type: "Team", link: "team.html" },
            { title: "Saeed Ibrahim", type: "Team", link: "team.html" }





            

            // Add more items here as needed!
        ];

        let highlightedIndex = -1; // For keyboard navigation

        // Function to filter and display search results
        function filterSuggestions() {
            const query = globalSearchBar.value.toLowerCase().trim();
            searchSuggestionsDiv.innerHTML = ""; // Clear previous results
            highlightedIndex = -1; // Reset highlight

            if (query === "") { // If search bar is empty, show no results
                searchSuggestionsDiv.classList.remove('active'); // Hide the container
                return;
            }

            const filtered = searchableItems.filter(item =>
                item.title.toLowerCase().includes(query)
            );

            if (filtered.length === 0) {
                // Display "No results found" message
                const noResultsPara = document.createElement("p");
                noResultsPara.classList.add('no-results'); // Add a class for styling
                noResultsPara.textContent = "No results found.";
                searchSuggestionsDiv.appendChild(noResultsPara);
                searchSuggestionsDiv.classList.add('active'); // Still show container for the message
                return;
            }

            filtered.forEach(item => {
                const div = document.createElement("div");
                div.className = "result-item"; // Add a class for styling individual results
                // Use a download attribute for PDFs, or remove it for direct navigation
                div.innerHTML = `<strong>${item.type}:</strong> <a href="${item.link}" ${item.link.endsWith('.pdf') ? 'download' : ''}>${item.title}</a>`;
                searchSuggestionsDiv.appendChild(div);
            });

            searchSuggestionsDiv.classList.add('active'); // Show the results container
        }

        // Function to handle keyboard navigation (Arrow Up/Down, Enter)
        function handleKeydown(e) {
            // Select all visible result items for navigation
            const visibleResults = Array.from(searchSuggestionsDiv.querySelectorAll('.result-item'));
            if (visibleResults.length === 0) return; // No items to navigate

            if (e.key === 'ArrowDown') {
                e.preventDefault(); // Prevent page scroll
                highlightedIndex = (highlightedIndex + 1) % visibleResults.length;
                updateHighlight(visibleResults);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault(); // Prevent page scroll
                highlightedIndex = (highlightedIndex - 1 + visibleResults.length) % visibleResults.length;
                updateHighlight(visibleResults);
            } else if (e.key === 'Enter') {
                e.preventDefault(); // Prevent form submission
                if (highlightedIndex !== -1) {
                    // Click the <a> tag inside the highlighted div
                    const linkElement = visibleResults[highlightedIndex].querySelector('a');
                    if (linkElement) {
                        linkElement.click();
                    }
                } else {
                    // If no item is highlighted but Enter is pressed, click the first result's link
                    if (visibleResults.length > 0) {
                        const linkElement = visibleResults[0].querySelector('a');
                        if (linkElement) {
                            linkElement.click();
                        }
                    }
                }
            }
        }

        // Function to update the 'highlighted' class on result items
        function updateHighlight(visibleResults) {
            visibleResults.forEach((el, i) => {
                el.classList.toggle('highlighted', i === highlightedIndex);
            });
            // Scroll highlighted item into view if necessary
            if (highlightedIndex !== -1) {
                visibleResults[highlightedIndex].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
            }
        }

        // Event Listeners for the global search bar
        globalSearchBar.addEventListener('input', filterSuggestions);
        globalSearchBar.addEventListener('keydown', handleKeydown);
        globalSearchBar.addEventListener('focus', filterSuggestions); // Show nothing initially if empty

        // Hide results when clicking outside the search bar or results container
        document.addEventListener('click', function(e) {
            if (!globalSearchBar.contains(e.target) && !searchSuggestionsDiv.contains(e.target)) {
                searchSuggestionsDiv.classList.remove('active');
            }
        });
    }

});