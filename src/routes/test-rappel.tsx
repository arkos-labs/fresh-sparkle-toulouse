import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/test-rappel')({
  beforeLoad: () => {
    throw redirect({ to: '/' });
  },
  component: () => null,
});
