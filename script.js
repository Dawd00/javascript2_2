(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')
  const loadingModal = document.getElementById('loadingModal')

  function showLoading() {
    loadingModal.classList.add('show')
  }

  function hideLoading() {
    loadingModal.classList.remove('show')
  }

  example.addEventListener("click", function () {
    console.log('=== EXAMPLE: Pobieranie wszystkich postów ===');
    showLoading();
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        console.log('Response status:', response.status);
        return response.json();
      })
      .then(array => {
        console.log('Liczba pobranych postów:', array.length);
        console.log('Wszystkie posty:', array);
        answer.innerHTML = JSON.stringify(array);
        hideLoading();
      })
      .catch(error => {
        console.error('Błąd:', error);
        hideLoading();
      })
  })

  cw1.addEventListener("click", function () {
    //TODO Com2_1.1 - Pobrać wszystkie posty i wyświetlić je w formie listy HTML
    //TODO Com2_1.2 - Dodać tekst "Loading..." podczas ładowania
    console.log('=== CW1: Lista wszystkich postów ===');
    showLoading();
    
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        console.log('Response status:', response.status);
        return response.json();
      })
      .then(posts => {
        console.log('Liczba pobranych postów:', posts.length);
        console.log('Wszystkie posty:', posts);
        console.log('Pierwsze 3 posty:', posts.slice(0, 3));
        return new Promise(resolve => {
          setTimeout(() => resolve(posts), 500)
        })
      })
      .then(posts => {
        let html = '<h2>Lista postów:</h2><ul>'
        posts.forEach(post => {
          html += `<li><strong>Post ${post.id}: ${post.title}</strong><br>${post.body}</li>`
        })
        html += '</ul>'
        answer.innerHTML = html
        console.log('✓ Lista postów wyświetlona pomyślnie');
        hideLoading();
      })
      .catch(error => {
        console.error('Błąd:', error);
        answer.innerHTML = `<p style="color: red;">Błąd: ${error.message}</p>`
        hideLoading();
      })
  })

  cw2.addEventListener("click", function () {
    //TODO Com2_1.3 - Pobrać pojedynczy post metodą GET i wyświetlić
    console.log('=== CW2: Pobieranie pojedynczego postu ===');
    showLoading();
    
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        console.log('Response status:', response.status);
        return response.json();
      })
      .then(post => {
        console.log('Pobrany post:', post);
        console.log('ID:', post.id);
        console.log('Tytuł:', post.title);
        console.log('User ID:', post.userId);
        console.log('Treść:', post.body);
        return new Promise(resolve => {
          setTimeout(() => resolve(post), 500)
        })
      })
      .then(post => {
        let html = '<h2>Pojedynczy post:</h2>'
        html += '<div style="border: 1px solid #ccc; padding: 15px; margin: 10px 0;">'
        html += `<h3>Post ${post.id}: ${post.title}</h3>`
        html += `<p><strong>User ID:</strong> ${post.userId}</p>`
        html += `<p>${post.body}</p>`
        html += '</div>'
        answer.innerHTML = html
        console.log('✓ Post wyświetlony pomyślnie');
        hideLoading();
      })
      .catch(error => {
        console.error('Błąd:', error);
        answer.innerHTML = `<p style="color: red;">Błąd: ${error.message}</p>`
        hideLoading();
      })
  })

  cw3.addEventListener("click", function () {
    //TODO Com2_1.4 - Utworzyć nowy post metodą POST
    console.log('=== CW3: Tworzenie nowego postu ===');
    const newPostData = {
      title: 'Nowy post utworzony przez użytkownika',
      body: 'To jest treść nowego postu dodanego przez formularz.',
      userId: 1,
    };
    console.log('Dane wysyłane:', newPostData);
    showLoading();
    
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(newPostData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => {
        console.log('Response status:', response.status);
        return response.json();
      })
      .then(newPost => {
        console.log('Utworzony post:', newPost);
        console.log('Nowe ID:', newPost.id);
        console.log('Tytuł:', newPost.title);
        console.log('User ID:', newPost.userId);
        console.log('Treść:', newPost.body);
        return new Promise(resolve => {
          setTimeout(() => resolve(newPost), 500)
        })
      })
      .then(newPost => {
        let html = `<h2>Dodano nowy post o ID = ${newPost.id}</h2>`
        html += '<div style="border: 2px solid green; padding: 15px; margin: 10px 0; background-color: #e8f5e9;">'
        html += `<h3>${newPost.title}</h3>`
        html += `<p><strong>User ID:</strong> ${newPost.userId}</p>`
        html += `<p>${newPost.body}</p>`
        html += '</div>'
        answer.innerHTML = html
        console.log('✓ Post utworzony i wyświetlony pomyślnie');
        hideLoading();
      })
      .catch(error => {
        console.error('Błąd:', error);
        answer.innerHTML = `<p style="color: red;">Błąd: ${error.message}</p>`
        hideLoading();
      })
  })

})();
