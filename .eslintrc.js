module.exports = {
    extends: [
        'react-app',
codex/remove-console.log-from-contactform.jsx
        'react-app/jest'
main
    ],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': 'error',
        // Disable prop-types as you might be using TypeScript
        'react/prop-types': 'off',
        // Add other custom rules here
    },
};
