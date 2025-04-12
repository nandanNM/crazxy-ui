import { cn } from "@/lib/utils";
import { Button } from "@/components/crazxy/button/button";
import { Loader2Icon } from "lucide-react";

interface LoadingButtonProps
  extends React.ComponentPropsWithoutRef<typeof Button> {
  loading: boolean;
}

const LoadingButton: React.FC<LoadingButtonProps> = ({
  loading,
  disabled,
  className,
  ...props
}) => {
  return (
    <Button
      disabled={loading || disabled}
      className={cn("flex items-center gap-2", className)}
      {...props}
    >
      {loading ? (
        <Loader2Icon className="animate-spin duration-300" />
      ) : (
        props.children
      )}
      {}
    </Button>
  );
};

export default LoadingButton;
