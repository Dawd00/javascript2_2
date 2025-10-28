(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.group('📋 Wszystkie posty (Example)');
        console.log('Liczba postów:', array.length);
        console.table(array);
        console.log('Pełne dane JSON:', array);
        console.groupEnd();
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function () {
    //TODO Com2_1.1 - Pobrać wszystkie posty i wyświetlić je w formie listy HTML
    //TODO Com2_1.2 - Dodać tekst "Loading..." podczas ładowania
    answer.innerHTML = '<p>Loading…</p>'
    
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        console.group('📝 Lista wszystkich postów (CW1)');
        console.log('Liczba pobranych postów:', posts.length);
        console.table(posts, ['id', 'userId', 'title']);
        console.log('Wybrane posty (pierwsze 5):');
        posts.slice(0, 5).forEach(post => {
          console.log(`Post ${post.id}: ${post.title}`);
        });
        console.log('Pełne dane:', posts);
        console.groupEnd();
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
      })
      .catch(error => {
        console.error('❌ Błąd podczas pobierania postów:', error);
        answer.innerHTML = `<p style="color: red;">Błąd: ${error.message}</p>`
      })
  })

  cw2.addEventListener("click", function () {
    //TODO Com2_1.3 - Pobrać pojedynczy post metodą GET i wyświetlić
    answer.innerHTML = '<p>Loading…</p>'
    
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(post => {
        console.group('📄 Pojedynczy post (CW2)');
        console.log('Szczegóły postu:');
        console.table([post]);
        console.log('ID:', post.id);
        console.log('User ID:', post.userId);
        console.log('Tytuł:', post.title);
        console.log('Treść:', post.body);
        console.log('Pełny obiekt:', post);
        console.groupEnd();
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
      })
      .catch(error => {
        console.error('❌ Błąd podczas pobierania postu:', error);
        answer.innerHTML = `<p style="color: red;">Błąd: ${error.message}</p>`
      })
  })

  cw3.addEventListener("click", function () {
    //TODO Com2_1.4 - Utworzyć nowy post metodą POST
    answer.innerHTML = '<p>Processing…</p>'
    
    const newPostData = {
      title: 'Nowy post utworzony przez użytkownika',
      body: 'To jest treść nowego postu dodanego przez formularz.',
      userId: 1,
    };
    
    console.group('✨ Tworzenie nowego postu (CW3)');
    console.log('Dane wysyłane do API:');
    console.table([newPostData]);
    console.log('JSON:', JSON.stringify(newPostData, null, 2));
    
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(newPostData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(newPost => {
        console.log('✅ Post został utworzony:');
        console.table([newPost]);
        console.log('Nowe ID postu:', newPost.id);
        console.log('Pełna odpowiedź:', newPost);
        console.groupEnd();
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
      })
      .catch(error => {
        console.error('❌ Błąd podczas tworzenia postu:', error);
        console.groupEnd();
        answer.innerHTML = `<p style="color: red;">Błąd: ${error.message}</p>`
      })
  })

})();
