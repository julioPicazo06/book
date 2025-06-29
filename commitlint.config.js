module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Reglas personalizadas para el formato de commits
    'type-enum': [
      2,
      'always',
      [
        'feat',     // Nuevas características
        'fix',      // Correcciones de bugs
        'docs',     // Documentación
        'style',    // Cambios de estilo (formato, espacios, etc.)
        'refactor', // Refactorización de código
        'perf',     // Mejoras de rendimiento
        'test',     // Agregar o modificar tests
        'chore',    // Tareas de mantenimiento
        'ci',       // Cambios en CI/CD
        'build',    // Cambios en el sistema de build
        'revert'    // Revertir commits anteriores
      ]
    ],
    'type-case': [2, 'always', 'lower'],
    'type-empty': [2, 'never'],
    'subject-case': [2, 'always', 'lower'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 72],
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [2, 'always']
  }
}; 