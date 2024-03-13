export function handleChangeNav(): void {
  const navbar = document.querySelector('.navbar');
  const blackground = document.querySelector('.backgroundBlack');
  const contentOpen = 'translate-x-72';
  const contentClose = '-translate-x-72';
  if (navbar?.classList.contains(contentClose)) {
    navbar?.classList.remove(contentClose);
    navbar?.classList.add(contentOpen);
    blackground?.classList.remove('hidden');
  } else {
    navbar?.classList.remove(contentOpen);
    navbar?.classList.add(contentClose);
    blackground?.classList.add('hidden');
  }
}

export function handleAddNavMenu(e: string): void {
  const navbar = document.querySelector(`${e}Menu`);
  const homeMenu = document.querySelector('.homeMenu');
  const pagesMenu = document.querySelector('.pagesMenu');
  const projectMenu = document.querySelector('.projectMenu');
  const blogMenu = document.querySelector('.blogMenu');
  const display = 'hidden';
  if (navbar?.classList.contains(display)) {
    navbar?.classList.remove(display);
    if (navbar !== homeMenu && !homeMenu?.classList.contains(display)) {
      homeMenu?.classList.add(display);
    }
    if (navbar !== pagesMenu && !pagesMenu?.classList.contains(display)) {
      pagesMenu?.classList.add(display);
    }
    if (navbar !== projectMenu && !projectMenu?.classList.contains(display)) {
      projectMenu?.classList.add(display);
    }
    if (navbar !== blogMenu && !blogMenu?.classList.contains(display)) {
      blogMenu?.classList.add(display);
    }
  } else {
    navbar?.classList.add(display);
  }
}
